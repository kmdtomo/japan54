'use client'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function ServicePage() {
  const { targetRef: serviceHeaderRef, isIntersecting: isServiceHeaderVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: deliveryRef, isIntersecting: isDeliveryVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: workflowRef, isIntersecting: isWorkflowVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  return (
    <div className="relative z-10">
      {/* ヘッダーセクション */}
      <section
        className="relative overflow-hidden z-10"
        ref={serviceHeaderRef}
      >
        <div className="relative w-full md:h-[42vh] h-[32vh]">
          <img
            src="/j_5.png"
            alt="配送車両"
            className="object-cover w-full h-full"
          />

          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 文言セクション */}
        <div className="absolute inset-0 flex items-center md:container mx-auto md:px-8 px-4 mt-24">
          <div className="md:max-w-2xl md:ml-6 ml-0 md:space-y-4 space-y-1">
            <div
              className={`
                inline-flex items-center justify-center space-x-3
                ${isServiceHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{
                animationDelay: '0.3s'
              }}
            >
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-white font-bold text-xl tracking-widest">事業内容</span>
            </div>
            <h1 className="text-white mt-0">
              <span
                className={`relative inline-block md:text-7xl text-5xl font-bold md:mb-4 ${
                  isServiceHeaderVisible ? 'animate-slide-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10 font-adobe">SERVICE</span>
                <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-5 w-[120%]" />
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* 配送ドライバー業務セクション */}
      <section className="relative z-30 md:px-[150px] px-4 py-16 bg-white" ref={deliveryRef}>
        <div className="container mx-auto">
          <h2
            className={`
              md:text-4xl text-3xl font-bold text-[#033859] font-adobe mb-6
              ${isDeliveryVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            Delivery Driver Work
          </h2>

          <div
            className={`
              mb-16
              ${isDeliveryVisible ? 'animate-fade-in-up' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-gray-700 mb-6">
              株式会社ジャパン54の配送ドライバーは、単なる荷物の運搬だけでなく、
              お客様と直接接する重要な役割を担っています。
              市街地・地方を問わず、全国各地への配送を行っております。日本全国へのサービスを提供しています。
            </p>
            <p className="text-gray-700 mb-6">
              お客様からのご要望があれば、出来る限りご対応させていただきます。
              迅速かつ丁寧な配送サービスをご提供いたします。
              安全運転を第一に考え、お客様の大切なお荷物をお届けいたします。
            </p>
           
          </div>

          {/* 運送サービス内容 */}
          <div className="mb-12">
            <h2
              className={`
                md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2 mt-20 flex items-center justify-start
                ${isDeliveryVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              運送サービス内容
            </h2>
            <div className="flex justify-start">
              <div className="w-20 h-1 bg-red-700 mb-10"></div>
            </div>

            {/* 個人宅配送 */}
            <div className="mb-12 mt-5">
              <h3 className="text-2xl font-bold text-[#033859] font-adobe mb-4">
                個人宅配送
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex items-center justify-center">
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/j_9.png"
                    alt="個人宅配送"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed">
                    一般家庭向けの配送サービスを提供しています。
                    丁寧な対応と正確な配達で、お客様の信頼にお応えします。
                  </p>
                  <p className="text-gray-700">
                    安全かつ迅速な配送で、お客様の日常生活をサポートいたします。
                    詳細については、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>

            {/* 企業配送 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#033859] font-adobe mb-2">
                企業配送
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex items-center justify-center">
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/j_10.png"
                    alt="企業配送"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-loose">
                    企業間物流の効率化をサポートします。
                    定期配送や大量配送など、ビジネスニーズに合わせた配送プランをご提案します。
                  </p>
                  <p className="text-gray-700 leading-loose">
                    納期厳守を徹底し、信頼性の高いサービスを提供します。
                    お客様のビジネスを物流面からサポートいたします。
                  </p>
                </div>
              </div>
            </div>

            {/* チャーター便 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#033859] font-adobe mb-2">
                チャーター便
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex items-center justify-center">
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/j_11.png"
                    alt="チャーター便"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-loose">
                    お客様専用の配送便として、チャーター便サービスを提供しています。
                    急ぎの配送や特殊な配送条件にも対応可能です。
                  </p>
                  <p className="text-gray-700 leading-loose">
                    大型荷物や精密機器など、特別な取り扱いが必要な荷物の輸送にも対応しています。
                    詳細については、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>

            {/* スポット便 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#033859] font-adobe mb-2">
                スポット便
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex items-center justify-center">
                <div className="relative h-[220px] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/j_3.png"
                    alt="スポット便"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-loose">
                    単発的な配送ニーズに対応するスポット便サービスを提供しています。
                    急な配送依頼や臨時の配送にも柔軟に対応いたします。
                  </p>
                  <p className="text-gray-700 leading-loose">
                    イベントや展示会などの特別な場面での配送も承ります。
                    詳細については、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 業務の流れ */}
      <section className="relative md:px-[150px] px-4 py-16 bg-gray-100" ref={workflowRef}>
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <h2 
              className={`
                md:text-3xl text-2xl font-bold text-[#033859] font-adobe mb-2
                ${isWorkflowVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >業務の流れ</h2>
            <div 
              className={`
                w-20 h-1 bg-red-700 mb-12
                ${isWorkflowVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
          
          <div className="container mx-auto md:px-8 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {/* 積み込み */}
              <div 
                className={`
                  text-center mb-8 md:mb-0
                  ${isWorkflowVisible ? 'animate-fade-in-left' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.7s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">1.積み込み</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_12.png"
                    alt="積み込み"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* 配送開始 */}
              <div 
                className={`
                  text-center
                  ${isWorkflowVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.8s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">2.運送開始</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_3.png"
                    alt="運送開始"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* 昼休憩 */}
              <div 
                className={`
                  text-center
                  ${isWorkflowVisible ? 'animate-fade-in-right' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.7s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">3.昼休憩</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_14.png"
                    alt="昼休憩"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 再度集荷 */}
              <div 
                className={`
                  text-center
                  ${isWorkflowVisible ? 'animate-fade-in-left' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.9s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">4.再度集荷</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_13.png"
                    alt="再度集荷"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* 帰社 */}
              <div 
                className={`
                  text-center
                  ${isWorkflowVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: '1s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">5.帰社</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_5.png"
                    alt="終了"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* 終了 */}
              <div 
                className={`
                  text-center
                  ${isWorkflowVisible ? 'animate-fade-in-right' : 'opacity-0'}
                `}
                style={{ animationDelay: '0.9s' }}
              >
                <h3 className="text-xl font-bold text-[#033859] mb-2">6.終了</h3>
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <img
                    src="/j_4.png"
                    alt="終了"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
