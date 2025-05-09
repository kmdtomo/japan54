import React from 'react'


export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#011533] to-[#033859] text-white md:py-16 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-[150px]">
        {/* フッターコンテンツグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 justify-items-center md:justify-items-start">
          {/* ロゴと会社情報 */}
          <div className="col-span-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-adobe">株式会社ジャパン54</h2>
            <p className="text-sm md:text-base text-gray-300 mb-4">
            〒150-0043<br />
              東京都渋谷区道玄坂１丁目１０番８号<br />
              渋谷道玄坂東急ビル２Ｆ－Ｃ
            </p>
            <p className="text-sm md:text-base text-gray-300">
              TEL: 070-2226-5648<br />
              E-mail: Logistics@japan54.com
            </p>
          </div>

          {/* 企業情報 - モバイルでは非表示 */}
          <div className="col-span-1 hidden md:block">
            <h3 className="text-lg font-bold mb-4 font-adobe">PAGE</h3>
            <ul className="space-y-2 text-white">
              <li>
                <a href="/company" className="text-white hover:text-red-500 transition-colors">会社概要</a>
              </li>
              <li>
                <a href="/recruit" className="text-white hover:text-red-500 transition-colors">採用情報</a>
              </li>
              <li>
                <a href="/service" className="text-white hover:text-red-500 transition-colors">事業内容</a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-red-500 transition-colors">お問い合わせ</a>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div className="col-span-1  md:mt-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 font-adobe">FOLLOW US</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center pt-8 border-t border-gray-700">
          {/* 法的ページへのリンク - 横並び */}
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="/privacy-policy" 
              className="text-xs md:text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              プライバシーポリシー
            </a>
            <a 
              href="/sctl" 
              className="text-xs md:text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              特定商取引法に基づく表記
            </a>
          </div>
          
          <p className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} 株式会社ジャパン54 Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
