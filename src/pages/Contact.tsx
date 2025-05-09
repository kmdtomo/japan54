import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ContactPage from '../components/modules/ContactPage'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const location = useLocation()
  const [formType, setFormType] = useState<'contact' | 'recruit'>('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  useEffect(() => {
    // URLクエリパラメータからフォームタイプを取得
    const params = new URLSearchParams(location.search)
    const type = params.get('type')
    if (type === 'recruit') {
      setFormType('recruit')
    }
    
    // デバッグ用のログを追加
    console.log("Contact page mounted, location:", location);
  }, [location])

  // フォーム送信ハンドラー
  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // フォームタイプを子コンポーネントから取得
      const currentFormType = formData.formType || formType;
      console.log("送信時のフォームタイプ:", currentFormType);
      
      // EmailJSを直接使用する方法に変更
      // EmailJSの設定を取得
      const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const emailApiKey = import.meta.env.VITE_EMAIL_API_KEY;
      
      if (!emailServiceId || !emailTemplateId || !emailApiKey) {
        console.warn('EmailJS設定が不完全です。環境変数を確認してください。');
        throw new Error('メール送信の設定が不完全です');
      }
      
      // EmailJSに送信するためのテンプレート変数を準備
      const templateParams = {
        name: formData.name,
        birthdate: formData.birthdate,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        message: formData.message,
        formType: currentFormType,
        formTypeText: currentFormType === 'contact' ? 'お問い合わせ' : '求人応募',
        messageTypeText: currentFormType === 'contact' ? 'お問い合わせ内容' : '応募内容',
        to_email: formData.email,
        reply_to: formData.email
      };
      
      // 管理者向けメール送信（自動返信も含む）
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        templateParams,
        emailApiKey
      );
      
      setSubmitSuccess(true)
      console.log("フォーム送信成功:", formData)
    } catch (error) {
      console.error("フォーム送信エラー:", error)
      setSubmitError(error instanceof Error ? error.message : '送信中にエラーが発生しました')
      
      // 開発環境の場合
      if (import.meta.env.DEV) {
        console.warn('開発環境: エラーが発生しましたが、処理を続行します');
        setSubmitSuccess(true); // 開発環境では成功したことにする
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // コンソールログを追加して問題を特定
  console.log("Contact page rendering with formType:", formType);

  return (
    <div className="min-h-screen">
      <ContactPage 
        initialFormType={formType} 
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      {/* フォームの送信状態を表示 */}
      <div className="text-center py-10">
        {isSubmitting && <p className="text-gray-600">送信中です...</p>}
        {submitSuccess && <p className="text-green-600">送信が完了しました。ありがとうございます。</p>}
        {submitError && <p className="text-red-600">エラー: {submitError}</p>}
      </div>
    </div>
  )
} 