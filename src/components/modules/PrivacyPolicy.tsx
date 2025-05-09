'use client'

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export default function PrivacyPolicy() {
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
            alt="プライバシーポリシーバナー"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* 文言セクション */}
        <div className="absolute inset-0 flex md:container mx-auto md:px-8 px-4  md:mt-0">
          <div className="md:max-w-2xl md:ml-6 ml-0 md:space-y-4 space-y-1 md:mt-36 mt-32">
            <div
              className={`
                inline-flex items-center justify-center space-x-3
                ${isHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-[2px] bg-white" />
              <span className="text-white font-bold md:text-xl text-sm tracking-widest">プライバシーポリシー</span>
            </div>
            <h1 className="text-white mt-0">
              <span
                className={`relative inline-block md:text-7xl text-3xl font-bold md:mb-4 ${
                  isHeaderVisible ? 'animate-slide-right' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10 font-adobe">PRIVACY POLICY</span>
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
            株式会社ジャパン54（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </p>
          </div>

          {/* 第1条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第1条（個人情報）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </div>

          {/* 第2条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第2条（個人情報の収集方法）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
            </p>
          </div>

          {/* 第3条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第3条（個人情報を収集・利用する目的）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4 text-sm md:text-base">
              当社が個人情報を収集・利用する目的は，以下のとおりです。
            </p>
            <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>当社サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li>ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
              <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
              <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
              <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>
          </div>

          {/* 第4条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第4条（利用目的の変更）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
              <li>利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。</li>
            </ol>
          </div>

          {/* 第5条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第5条（個人情報の第三者提供）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>
                当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li>
                    予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>利用目的に第三者への提供を含むこと</li>
                      <li>第三者に提供されるデータの項目</li>
                      <li>第三者への提供の手段または方法</li>
                      <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                      <li>本人の求めを受け付ける方法</li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                  <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  <li>個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合</li>
                </ol>
              </li>
            </ol>
          </div>

          {/* 第6条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第6条（個人情報の開示）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>
                当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ol>
              </li>
              <li>前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。</li>
            </ol>
          </div>

          {/* 第7条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第7条（個人情報の訂正および削除）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。</li>
              <li>当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。</li>
              <li>当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。</li>
            </ol>
          </div>

          {/* 第8条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第8条（個人情報の利用停止等）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。</li>
              <li>前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。</li>
              <li>当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。</li>
              <li>前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。</li>
            </ol>
          </div>

          {/* 第9条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第9条（プライバシーポリシーの変更）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <ol className="list-decimal pl-4 md:pl-6 space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
              <li>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。</li>
              <li>当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</li>
            </ol>
          </div>

          {/* 第10条 */}
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#033859] mb-2 md:mb-4">第10条（お問い合わせ窓口）</h2>
            <div className="h-1 w-16 bg-red-700 mb-3 md:mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-2 md:mb-4 text-sm md:text-base">
              本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
            </p>
            <div className="bg-gray-50 p-4 md:p-6 rounded-md">
              <p className="text-gray-700 mb-1 text-sm md:text-base">会社名：株式会社ジャパン54</p>
              <p className="text-gray-700 mb-1 text-sm md:text-base">代表：早川　孔介</p>
              <p className="text-gray-700 text-sm md:text-base">Eメールアドレス：Logistics@japan54.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
