'use client'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function SCTL() {
  // ヘッダーセクションの表示検知用
  const { targetRef: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  return (
    <div className="relative z-10">
      {/* ヘッダーセクション - 他のページと統一 */}
      <section className="relative overflow-hidden z-10" ref={headerRef}>
        {/* 背景画像 */}
        <div className="relative w-full md:h-[45vh] h-[30vh]">
          <img
            src="/j_7.png"
            alt="特定商取引法に基づく表記バナー"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* 文言セクション */}
        <div className="absolute inset-0 flex md:container mx-auto md:px-8 px-4 md:mt-0">
          <div className="md:max-w-2xl md:ml-6 ml-0 md:space-y-4 space-y-1 md:mt-36 mt-32">
            <div
              className={`
                inline-flex items-center justify-center space-x-3
                ${isHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-white font-bold md:text-xl text-sm tracking-widest">特定商取引法に基づく表記</span>
            </div>
            <h1 className="text-white mt-0">
              <span
                className={`relative inline-block md:text-7xl text-3xl font-bold md:mb-4 ${
                  isHeaderVisible ? 'animate-slide-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10 font-adobe">LEGAL NOTICE</span>
                <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-5 w-[120%]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-6 md:mb-10">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              特定商取引法に基づく表記（特定商取引に関する法律第11条に基づく表示）
            </p>
          </div>

          {/* 表形式で情報を表示 */}
          <div className="overflow-hidden rounded-lg border border-gray-200 mb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">会社名</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">株式会社ジャパン54</td>
                </tr>
                <tr>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">事業者の名称</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">早川　孔介</td>
                </tr>
                <tr>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">設立</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">2023.10</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">資本金</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">50万円</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">サービス名・事業内容</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">運送業</td>
                </tr>
                <tr>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">事業者の所在地</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">〒150-0043<br />東京都渋谷区道玄坂１丁目１０番８号<br />渋谷道玄坂東急ビル２Ｆ－Ｃ</td>
                </tr>
                <tr className="bg-gray-50">
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">事業者の連絡先メールアドレス</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">Logistics@japan54.com</td>
                </tr>
                <tr>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left text-xs md:text-sm font-medium text-gray-700 w-1/3 md:w-1/4">電話番号</th>
                  <td className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm text-gray-700">070-2226-5648</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
