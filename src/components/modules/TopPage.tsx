'use client'

import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useNavigate } from 'react-router-dom'


export const Top: React.FC = () => {
  const { targetRef: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })
  
  const { targetRef: serviceRef, isIntersecting: isServiceVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })
  
  const { targetRef: recruitRef, isIntersecting: isRecruitVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const { targetRef: companyRef, isIntersecting: isCompanyVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const navigate = useNavigate()

  // 遷移時にスクロール位置をトップに戻す関数を追加
  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  }

  return (
    // ページ全体を覆うコンテナ - overflow-x-hiddenを確実に適用
    <div className="relative overflow-x-hidden z-10 w-full">

      {/* 1. 背景要素を絶対配置 - PCとモバイルで異なるスタイルを適用 */}
      <div className="hidden md:block absolute top-0 left-[-15rem] w-[calc(100%+4rem)] h-[150vh] bg-gradient-to-b from-[#011533] to-[#033859] z-10 shadow-2xl"
        style={{
          clipPath: 'polygon(100% 0, 25% 0, -10% 100%, 60% 100%)',
        }}
      />
      {/* モバイル用の背景 */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[130vh] bg-gradient-to-b from-[#011533] to-[#033859] z-10 shadow-2xl"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)',
        }}
      />

      {/* 2. ヒーローセクション */}
      <section className="relative min-h-screen overflow-hidden z-10">
        {/* PC用レイアウト - md以上で表示 */}
        <div className="hidden md:block h-full">
          {/* 画像部分 - PCでは右側に配置 */}
          <div className="absolute bottom-0 right-0 w-[75%] h-[82%]">
            <img
              src="/japan54.png"
              alt="夜の高速道路"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#011533]/80 to-transparent" />
          </div>
          
          {/* テキストコンテンツ - PCでは左側に配置 */}
          <div className="relative z-20 container mx-auto px-4 h-screen flex flex-col justify-center">
            <div className="max-w-2xl space-y-4 ml-6">
              <div 
                className="inline-flex items-center space-x-3 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="w-12 h-[2px] bg-[#ccb054]"></div>
                <span className="text-[#ccb054] font-bold text-3xl tracking-widest">ジャパン54</span>
              </div>
              
              <h1 className="text-white">
                <span className="relative inline-block text-8xl font-bold mb-4 animate-slide-right" style={{ animationDelay: '0.5s' }}>
                  <span className="relative z-10 font-adobe">UNITED</span>
                  <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-5 w-[110%]" />
                </span>
                <br />
                <span className="relative inline-block text-8xl font-bold mb-8 animate-slide-right" style={{ animationDelay: '0.7s' }}>
                  <span className="relative font-adobe z-10">FOR FUTURE</span>
                  <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-6 w-[110%]" />
                </span>
                <br />
                <span className="relative inline-block text-2xl font-bold tracking-wider animate-slide-right" style={{ animationDelay: '0.9s' }}>
                  <span className="relative z-10">関わる全ての人と未来への挑戦</span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* モバイル用レイアウト - md未満で表示 */}
        <div className="md:hidden relative min-h-screen mt-5 md:mt-0 flex flex-col">
          {/* 上部画像エリア */}
          <div className="relative w-full h-[73vh]">
            <img
              src="/japan54.png"
              alt="夜の高速道路"
              className="object-cover w-full h-full"
            />
            {/* グラデーションオーバーレイ */}
            <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-t from-[#011533] to-transparent" />
          </div>
          
          {/* 下部テキストエリア */}
          <div className="relative z-20 w-full flex-1 bg-transparent px-6 flex flex-col justify-center items-center -mt-[30vh]">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2">
                <div className="w-10 h-[2px] bg-[#ccb054]"></div>
                <span className="text-[#ccb054] font-bold text-2xl tracking-widest">ジャパン54</span>
              </div>
              
              <h1 className="text-white">
                <span className="relative inline-block text-6xl font-bold mb-2">
                  <span className="relative z-10 font-adobe">UNITED</span>
                  <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-3 w-[110%]" />
                </span>
                <br />
                <span className="relative inline-block text-6xl font-bold md:mb-3">
                  <span className="relative font-adobe z-10">FOR FUTURE</span>
                  <div className="absolute inset-0 bg-red-700/90 -skew-x-12 transform -translate-x-3 w-[110%]" />
                </span>
                <br />
                <span className="relative inline-block text-xl font-bold tracking-wider md:mt-2">
                  <span className="relative z-10">関わる全ての人と未来への挑戦</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* about usセクション */}
      <section className="relative z-30 md:px-[150px] px-4 md:py-24 py-8 md:mt-0 -mt-20 w-full max-w-full overflow-x-hidden" ref={aboutRef}>
        <div className="container mx-auto max-w-6xl relative">
          {/* 背景画像として絶対配置 */}
          <div 
            className={`absolute top-0 right-0 md:w-[750px] w-full md:h-[450px] h-[300px] -z-10 md:mt-16 mt-20 ${
              isAboutVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <img
              src="/japan54(4).png"
              alt="代表写真"
              className="object-cover w-full h-full md:mt-0 mt-4"
            />
          </div>
          <div className="flex flex-col space-y-6">
            {/* About Us */}
            <div 
              className={`md:mb-16 mb-[200px] ${
                isAboutVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <h2 className="md:text-5xl text-3xl font-bold mb-1 text-white font-adobe">ABOUT US</h2>
              <p className="text-left md:text-lg text-base font-bold text-red-600">ジャパン54とは</p>
            </div>
            <div 
              className={`bg-white rounded-md md:p-10 p-6 md:w-[500px] w-full shadow-lg space-y-4 ${
                isAboutVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.7s' }}
            >
              <h3 className="md:text-2xl text-xl font-bold text-gray-800">関わる全ての人と未来への挑戦</h3>
              <p className="md:text-base text-sm text-gray-600 leading-relaxed">
                運送業の未来を切り拓くため、全ての関係者と共に新たな挑戦に踏み出します。最新技術と豊富な経験を融合させ、効率的かつ安全な物流サービスを提供。地域社会への貢献と環境への配慮を両立し、持続可能な輸送ネットワークの構築に全力を注いでいます。
              </p>
              <p className="font-semibold text-[#033859]">
                代表取締役　早川　孔介
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* serviceセクション */}
      <section className="relative z-30 md:px-[150px] px-4 md:py-12 py-8 md:mb-20 w-full max-w-full" ref={serviceRef}>
        <div className="container mx-auto max-w-6xl relative">
          {/* PC用レイアウト - md以上で表示 */}
          <div className="hidden md:block">
            {/* 背景画像として絶対配置 - 左側に配置 */}
            <div 
              className={`absolute top-0 left-0 w-[750px] h-[450px] -z-10 mt-[120px] ${
                isServiceVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <img
                src="/j_3.png"
                alt="トラック輸送の様子"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-end space-y-6">
              <div 
                className={`mb-16 w-full ${
                  isServiceVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <h2 className="text-5xl font-bold mb-1 text-[#033859] font-adobe">SERVICE</h2>
                <p className="text-left text-lg font-bold text-red-600 mb-10">事業内容</p>
              </div>
              <div 
                className={`bg-white rounded-md p-10 w-[500px] shadow-lg space-y-4 ${
                  isServiceVisible ? 'animate-fade-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.7s' }}
              >
                <h3 className="text-2xl font-bold text-gray-800">総合物流サービス</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                株式会社ジャパン54の配送ドライバーは、単なる荷物の運搬だけでなく、 お客様と直接接する重要な役割を担っています。 市街地・地方を問わず、全国各地への配送を行っております。日本全国へのサービスを提供しています。
                </p>
                <div className="flex justify-start mt-4">
                  <button
                    onClick={() => handleNavigate('/service')}
                    className="bg-red-700 text-white px-5 py-2 mt-2 rounded-md shadow hover:bg-red-800 transition-colors"
                  >
                    事業内容について →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* モバイル用レイアウト - md未満で表示 */}
          <div className="md:hidden">
            <h2 className="text-3xl font-bold mb-1 text-[#033859] font-adobe">SERVICE</h2>
            <p className="text-left text-base font-bold text-red-600 mb-8">事業内容</p>

            {/* 背景画像として絶対配置 */}
            <div 
              className={`absolute top-0 right-0 w-full h-[300px] -z-10 mt-20 ${
                isServiceVisible ? 'animate-fade-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <img
                src="/j_3.png"
                alt="トラック輸送の様子"
                className="object-cover w-full h-full mt-4"
              />
            </div>
            <div className="flex flex-col space-y-6">
              {/* Service */}
              <div 
                className={`mb-[200px] ${
                  isServiceVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.3s' }}
              >
              </div>
              <div 
                className={`bg-white rounded-md p-6 w-full shadow-lg space-y-4 ${
                  isServiceVisible ? 'animate-fade-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.7s' }}
              >
                <h3 className="text-xl font-bold text-gray-800">総合物流サービス</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  株式会社ジャパン54の配送ドライバーは、単なる荷物の運搬だけでなく、 お客様と直接接する重要な役割を担っています。 市街地・地方を問わず、全国各地への配送を行っております。日本全国へのサービスを提供しています。
                </p>
                <div className="flex justify-start mt-4">
                  <button
                    onClick={() => handleNavigate('/service')}
                    className="bg-red-700 text-white px-4 py-2 text-sm rounded-md shadow hover:bg-red-800 transition-colors"
                  >
                    事業内容について →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitセクション */}
      <section className="relative md:px-[150px] px-4 md:py-12 py-8 mt-6 w-full max-w-full h-auto mb-8 overflow-x-hidden" ref={recruitRef}>
        {/* 背景画像とオーバーレイをグループ化 */}
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <img
              src="/j_6.png"
              alt="背景イメージ"
              className="object-cover w-full h-full brightness-75"
            />
            {/* 白色の背景オーバーレイは背景画像内に適用 */}
            <div className="absolute inset-0 bg-white opacity-75"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl w-full">
          {/* PC用レイアウト - md以上で表示 */}
          <div className="md:grid md:grid-cols-2 flex flex-col gap-8 items-center">
            {/* 左カラム */}
            <div className={`w-full ${isRecruitVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <h2 className="md:text-5xl text-3xl font-bold mb-1 text-[#033859] font-adobe">RECRUIT</h2>
              <p className="text-left md:text-lg text-base font-bold text-red-600 mb-10">採用情報</p>
              <div className="mt-6">
             
              </div>
            </div>

            {/* 右カラム */}
            <div 
              className={`w-full ${isRecruitVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <h3 className="md:text-3xl text-xl font-semibold mb-6 text-[#033859]">
                物流の未来を共に切り拓く
              </h3>
              <p className="md:text-base text-sm text-gray-800 mb-4 leading-relaxed">
                運送業界は、社会の基盤を支える重要な役割を果たしながら、デジタル技術と革新で新たな挑戦を続けています。効率的で安全な輸送ネットワークの構築は、未来への架け橋となります。
              </p>
              <p className="md:text-base text-sm text-gray-800 mb-6 leading-relaxed">
                私たちは、迅速かつ信頼性の高いサービスを提供することで、お客様と地域社会に貢献するだけでなく、持続可能な物流革命を推進しています。次世代の物流システムを共に創造する仲間を募集します。
              </p>
              <button 
                onClick={() => handleNavigate('/recruit')}
                className="bg-red-700 text-white md:px-5 px-4 md:py-2 py-2 rounded-md shadow hover:bg-red-800 transition-colors">
                採用情報について →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="relative md:px-[150px] px-4 md:py-16 py-12 bg-white w-full max-w-full overflow-x-hidden" ref={companyRef}>
        <div className="container mx-auto max-w-6xl w-full">
          <h2 className={`md:text-5xl text-3xl font-bold mb-1 text-[#033859] font-adobe ${isCompanyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>COMPANY</h2>
          <p className={`text-left md:text-lg text-base font-bold text-red-600 mb-10 ${isCompanyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>会社概要</p>
          <div className='flex justify-center'>
            {/* PC用レイアウト - md以上で表示 */}
            <div className={`md:block hidden space-y-6 w-[950px] ${isCompanyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              {/* 各情報項目 */}
              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">会社名</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600">株式会社ジャパン54</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">営業所</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600 space-y-2">
                    <span className="block mb-2">
                      ・〒187-0022 東京都小平市上水本町１丁目２６−１１
                      <span className="ml-2 text-red-700 font-semibold">（担当：国分寺）</span>
                    </span>
                    <span className="block mb-2">
                      ・〒176-0022 東京都練馬区向山１丁目２−１
                      <span className="ml-2 text-red-700 font-semibold">（担当：中村）</span>
                    </span>
                    <span className="block">
                      ・〒135-0061 東京都江東区豊洲２丁目４−９
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">所在地</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600">〒150-0043 東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ－Ｃ</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">設立</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600">2023.10</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">取締役</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600">早川　孔介</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-b border-[#033859] px-5 py-4">
                <div className="w-[300px]">
                  <h3 className="text-lg font-bold text-gray-700">資本金</h3>
                </div>
                <div className="w-[600px]">
                  <p className="text-base text-gray-600">50万円</p>
                </div>
              </div>
            </div>

            {/* モバイル用レイアウト - md未満で表示 */}
            <div className={`md:hidden block space-y-6 w-full ${isCompanyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
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
                  <h3 className="text-base font-bold text-gray-700">営業所</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600 space-y-3">
                    <span className="block">
                      ・〒187-0022 東京都小平市上水本町１丁目２６−１１
                      <span className="block ml-2 text-red-700 font-semibold">（担当：国分寺）</span>
                    </span>
                    <span className="block">
                      ・〒176-0022 東京都練馬区向山１丁目２−１
                      <span className="block ml-2 text-red-700 font-semibold">（担当：中村）</span>
                    </span>
                    <span className="block">
                      ・〒135-0061 東京都江東区豊洲２丁目４−９
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">所在地</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">〒150-0043 東京都渋谷区道玄坂１丁目１０番８号渋谷道玄坂東急ビル２Ｆ－Ｃ</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">設立</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">2023.10</p>
                </div>
              </div>

              <div className="flex flex-col border-b border-[#033859] px-3 py-4">
                <div className="w-full mb-2">
                  <h3 className="text-base font-bold text-gray-700">取締役</h3>
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-600">早川　孔介</p>
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
            </div>
          </div>
          <div className={`flex justify-center mt-6 ${isCompanyVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <button 
              onClick={() => handleNavigate('/company')}
              className="bg-red-700 text-white md:px-5 px-4 md:py-2 py-2 rounded-md shadow hover:bg-red-800 transition-colors">
              会社概要について →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
