import React from 'react'
import ContentBlock from './ContentBlock'

const ActivitiesBlock: React.FC<Props> = (props) => {
    return (
      <ContentBlock
        title={"活動内容"}
      >
        <p>毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座やLT（Lightning Talks : 短いプレゼンテーション）を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。</p>
        <p>普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。</p>
        <br></br>
        <h4>企画作成・発表</h4>
        <p>1年間で前期と後期の2回に分けて行なっています。まずはじめに、企画発表でやりたいことを発信して、メンバーを募集します。そして協力して制作し、中間発表を経て、最終発表で成果を披露します。個人で制作したものを発表する部員も多くいます。</p>
        <br></br>
        <h4>合宿</h4>
        <p>8月に夏合宿、2月に冬合宿を行なっています。合宿中には様々な講座が行われ、技術を向上させたり、交流を深めたりすることができます。コロナ禍の2020～2022年度はオンラインで開催しました。</p>
      </ContentBlock>
    )
}

type Props = {};

export default ActivitiesBlock;