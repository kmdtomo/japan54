'use client'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function CompanyPage() {
  // クライアントサイドでのみレンダリングされるようにする

  
  // Intersection Observerのカスタムフック
  const { targetRef: companyHeaderRef, isIntersecting: isCompanyHeaderVisible } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '0px'
  })

  const { targetRef: companyProfileRef, isIntersecting: isCompanyProfileVisible } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '0px'
  })

  const { targetRef: mapRef, isIntersecting: isMapVisible } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '0px'
  })


  return (
    <div className="relative z-10">
      <section
        className="relative overflow-hidden z-10"
        ref={companyHeaderRef}
      >
        <div className="relative w-full md:h-[42vh] h-[32vh]">
          <img
            src="/j_6.png"
            alt="会社概要バナー"
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
                ${isCompanyHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-white font-bold text-xl tracking-widest">会社概要</span>
            </div>
            <h1 className="text-white mt-0">
              <span
                className={`relative inline-block md:text-7xl text-5xl font-bold md:mb-4 ${
                  isCompanyHeaderVisible ? 'animate-slide-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10 font-adobe">COMPANY</span>
                <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-5 w-[120%]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="relative py-16 md:px-[150px] px-4 bg-white" ref={companyProfileRef}>
        <div className="container mx-auto">
          <h2 
            className={`
              md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2
              ${isCompanyProfileVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            会社概要
          </h2>
          <div 
            className={`
              w-20 h-1 bg-red-700 mb-12
              ${isCompanyProfileVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          ></div>
          
          <div 
            className={`flex justify-center fade-in-up ${
              isCompanyProfileVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            {/* PC用レイアウト */}
            <div className="md:block hidden space-y-6 w-[950px]">
              {/* 各情報項目 */}
              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">会社名</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">株式会社ジャパン54
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">所在地</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">〒150-0043<br />東京都渋谷区道玄坂１丁目１０番８号<br />渋谷道玄坂東急ビル２Ｆ－Ｃ</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">代表者</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">早川　孔介</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">設立日</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">2023.10</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">資本金</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">50万円</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">従業員数</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">30名</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">事業内容</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">運送事業</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">電話番号</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">070-2226-5648</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">メールアドレス</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">loginexus.0727@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">営業休日</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">年末年始</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">営業時間</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-gray-600">8:00～21:00</p>
                </div>
              </div>
            </div>

            {/* モバイル用レイアウト */}
            <div className="md:hidden block space-y-6 w-full">
              {/* 各情報項目 */}
              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">会社名</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">株式会社ジャパン54</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">所在地</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">〒150-0043<br />東京都渋谷区道玄坂１丁目１０番８号<br />渋谷道玄坂東急ビル２Ｆ－Ｃ</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">代表者</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">早川　孔介</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">設立日</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">2023.10</p>
                </div>
              </div>
              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">資本金</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">50万円</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">従業員数</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">30名</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">事業内容</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">運送事業</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">電話番号</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">070-2226-5648</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">メールアドレス</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">loginexus.0727@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">営業休日</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">年末年始</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">営業時間</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">8:00～21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Googleマップセクション */}
      <section className="relative md:px-[150px] px-4 py-16 bg-gray-100" ref={mapRef}>
        <div className="container mx-auto">
          <h2 
            className={`
              md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2
              ${isMapVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            アクセス
          </h2>
          <div 
            className={`
              w-20 h-1 bg-red-700 mb-12
              ${isMapVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          ></div>

          <div 
            className={`w-full md:h-[500px] h-[300px] fade-in-up ${
              isMapVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.999550983267!2d139.69542421525733!3d35.657592238851974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9f337d6be7%3A0x239968f8a1a0a295!2z5p2x5Lqs6YO95riv5Y2B77yR5bCP55-l77yR77yW!5e0!3m2!1sja!2sjp!4v1697181135948!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-lg"
            ></iframe>
          </div>

          <div 
            className={`mt-8 text-center fade-in-up ${
              isMapVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=東京都渋谷区道玄坂1-10-8渋谷道玄坂東急ビル2F-C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white md:px-6 px-4 md:py-3 py-2 rounded-md hover:bg-red-800 hover:text-white transition-colors md:text-base text-sm"
            >
              大きな地図で見る
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
