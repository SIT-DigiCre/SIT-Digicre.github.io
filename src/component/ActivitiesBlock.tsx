import React from 'react'
import ContentBlock from './ContentBlock'

const ActivitiesBlock: React.FC<Props> = (props) => {
    return (
      <ContentBlock
        title={"活動内容"}
      >
        <p>毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座や<b>LT（Lightning Talks : 短いプレゼンテーション）</b>を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。</p>
        <p>普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。</p>
        <br></br>
        <h3>企画作成・発表</h3>
        <p>前期と後期の２回行っています。企画発表でやりたいことを発信して、メンバーを募集します。そして協力して制作し、中間発表を経て、最終発表で成果を披露します。個人で制作した方も発表することができます。</p>
        <br></br>
        <h3>合宿</h3>
        <p>８月に夏合宿、2月に冬合宿を行います。合宿中には様々な講座が行われ、技術を向上させたり、交流を深めたりすることができます。2020年度はオンラインで集まるエア合宿を開催しました。</p>
      </ContentBlock>
    )
}
type Props = {};

export default ActivitiesBlock;