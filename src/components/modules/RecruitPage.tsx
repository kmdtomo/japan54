'use client'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function RecruitPage() {
  // サービスページ同様にIntersection Observerのカスタムフックを使う
  const { targetRef: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: recruitHeaderRef, isIntersecting: isRecruitHeaderVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: recruitMessageRef, isIntersecting: isRecruitMessageVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: requirementsRef, isIntersecting: isRequirementsVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  // 応募ボタンのクリックハンドラを追加
  const handleApplyClick = () => {
    // お問い合わせページに遷移し、求人応募タブを選択状態にする
    window.location.href = '/contact?type=recruit';
  };

  return (
    <div className="relative z-10">
      {/* ヘッダーセクション */}
      <section
        className="relative overflow-hidden z-10"
        ref={recruitHeaderRef}
      >
        <div className="relative w-full md:h-[42vh] h-[32vh]">
          <img
            src="/j_7.png"
            alt="採用情報バナー"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 文言セクション */}
        <div className="absolute inset-0 flex items-center md:container mx-auto md:px-8 px-4 mt-24">
          <div className="md:max-w-2xl md:ml-6 ml-0 md:space-y-4 space-y-1">
            <div
              className={`
                inline-flex items-center justify-center space-x-3
                ${isRecruitHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-white font-bold text-xl tracking-widest">採用情報</span>
            </div>
            <h1 className="text-white mt-0">
              <span
                className={`relative inline-block md:text-7xl text-5xl font-bold md:mb-4 ${
                  isRecruitHeaderVisible ? 'animate-slide-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10 font-adobe">RECRUIT</span>
                <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-5 w-[120%]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 採用メッセージセクション */}
      <section className="relative z-30 md:px-[150px] px-4 md:py-20 py-16 mb-8 bg-white" ref={recruitMessageRef}>
        <div className="container mx-auto max-w-6xl relative">
          {/* 背景画像として絶対配置 */}
          <div 
            className={`absolute top-0 right-0 md:w-[750px] w-full md:h-[450px] h-[300px] -z-10 md:mt-8 mt-20 ${
              isRecruitMessageVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <img
              src="/j_8.png"
              alt="代表写真"
              className="object-cover w-full h-full md:mt-0 mt-4"
            />
          </div>

          {/* タイトル */}
          <h2
            className={`
              md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2
              ${isRecruitMessageVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            採用メッセージ
          </h2>
          <div 
            className={`
              w-20 h-1 bg-red-700 md:mb-12 mb-[200px]
              ${isRecruitMessageVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          ></div>

          {/* 採用メッセージ本文 */}
          <div
            ref={aboutRef}
            className={`bg-white rounded-md md:p-10 p-6 md:w-[600px] w-full shadow-lg space-y-8 ${
              isAboutVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.7s' }}
          >
            {/* キャッチフレーズ1 */}
            <h3 className="md:text-2xl text-xl font-bold text-[#033859]">
              高収入50万円以上可能！軽バン配送で自由に稼ぐチャンス
            </h3>
            <p className="text-gray-700 md:text-base text-sm leading-relaxed">
              株式会社ジャパン54では、<strong>月給40万円～80万円</strong>を目標にできる軽バン配送のお仕事を募集しています。
              必要な資格は普通自動車免許（AT限定可）のみで、未経験でも挑戦可能。<br />
              先輩ドライバーが現場でのノウハウを丁寧にお教えしますので、地方から上京してスタートする方や、
              初めての配送業という方も安心して働ける環境が整っています。
            </p>
          </div>
        </div>
      </section>

      {/* 募集要項セクション */}
      <section className="relative md:px-[150px] px-4 py-16 bg-gray-100" ref={requirementsRef}>
        <div className="container mx-auto">
          <h2 
            className={`
              md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2
              ${isRequirementsVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            募集要項
          </h2>
          <div 
            className={`
              w-20 h-1 bg-red-700 mb-12
              ${isRequirementsVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          ></div>

          <div
            className={`
              bg-white md:p-8 p-4 shadow-md rounded-md
              ${isRequirementsVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.7s' }}
          >
            {/* 職種・雇用形態 */}
            <h3 className="md:text-2xl text-xl font-bold text-[#033859] mb-6">
              軽バンドライバー（業務委託/個人事業主）
            </h3>

            {/* 勤務地・アクセス */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-bold">【勤務地】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・東京都内各所
                  <br />
                  ・神奈川県内各所
                  <br />
                  ・その他都内近郊の各拠点
                </p>
              </div>
              <div>
                <p className="font-bold">【アクセス】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・自家用車での通勤可（車両貸与制度あり）
                  <br />
                  ・電車通勤が苦手な方にも対応可能
                </p>
              </div>
            </div>

            {/* 勤務時間・雇用形態 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-bold">【勤務時間】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・7:00〜20:00を基本とした稼働（業務委託のため自由度あり）
                  <br />
                  ・休憩時間は自由に取得可能
                  <br />
                  ・1日の流れ例：
                  <br />
                  &emsp;AM7:00 ～ 1便積み込み → 配達開始
                  <br />
                  &emsp;PM13:00 ～ 2便積み込み（配達再開）
                  <br />
                  &emsp;PM17:30 ～ 3便積み込み（配達再開）
                  <br />
                  &emsp;業務終了後、センターに戻り終了報告 → 直帰OK
                </p>
              </div>
              <div>
                <p className="font-bold">【雇用形態】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・業務委託（個人事業主）
                  <br />
                  ・自分のペースで稼働可能
                  <br />
                  ・日払い・週払い可（当社規定あり、要相談）
                </p>
              </div>
            </div>

            {/* 給与・待遇 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-bold">【給与/報酬】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・月給：40万円～80万円（出来高制）
                  <br />
                  ・未経験でも月収50万以上可能
                  <br />
                  ・日払い・週払い対応可（規定あり）
                </p>
              </div>
              <div>
                <p className="font-bold">【待遇/福利厚生】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・車両貸出制度あり
                  <br />
                  ・アプリによる配達サポート体制
                  <br />
                  ・作業着/制服貸与
                  <br />
                  ・管理者によるフォロー体制
                </p>
              </div>
            </div>

            {/* 休日・休暇 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-bold">【休日・休暇】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・シフト制（業務委託のため自由に調整可能）
                  <br />
                  ・稼働日数は相談に応じます
                </p>
              </div>
              <div>
                <p className="font-bold">【応募方法】</p>
                <p className="text-gray-700 md:text-base text-sm">
                  ・お電話または専用フォームよりご応募ください
                  <br />
                  ・面接日程は追ってご連絡いたします
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* 応募ボタンにクリックハンドラを追加 */}
              <button 
                className="bg-red-700 text-white md:px-8 px-6 md:py-3 py-2 rounded-md hover:bg-red-600 transition duration-300 md:text-base text-sm"
                onClick={handleApplyClick}
              >
                応募する
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
