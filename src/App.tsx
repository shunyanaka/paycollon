import React, { ReactNode } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ArcElement);
Chart.register(ArcElement, ChartDataLabels);

const Container = styled.div`
  text-align: center;
  background-color: #f8f8f8; // ライトグレイの背景色
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3em; // タイトルのフォントサイズを大きく
  color: #333; // ダークグレイの色
  margin: 40px 0;
`;

const Subheading = styled.h2`
  color: #333; // ここで色をダークグレイに設定
  margin: 100px 0 10px; // 上下のマージンを適宜調整
  font-size: 2em; // 小見出しのフォントサイズ
`;

const SSubheading = styled.h2`
  color: #333; // ここで色をダークグレイに設定
  margin: 100px 0 10px; // 上下のマージンを適宜調整
  font-size: 1.6em; // 小見出しのフォントサイズ
`;

const Description = styled.p`
  color: #666; // ミディアムグレイの色
  margin: 20px 0;
  font-size: 1.2em;
`;

const VideoWrapper = styled.div`
  margin: 40px 0;
`;

const Video = styled.video`
  width: 90%;
  max-width: 800px; // ビデオの最大幅を大きく
  margin-top: 20px;
  border-radius: 10px; // ビデオの角を丸く
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // ビデオに影を付ける
`;

const ContactSection = styled.section`
  margin-top: 300px;
`;

const ContactHeading = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  color: #666;
  margin-bottom: 300px;
  font-size: 1.2em;
  a {
    color: #0066cc;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled.a`
  color: #1a0dab; // リンクの色
  text-decoration: none; // 下線を消す

  &:hover {
    text-decoration: underline; // ホバー時に下線を表示
  }
`;

const VideoComponent = ({
  src,
  children,
}: {
  src: string;
  children?: ReactNode;
}) => (
  <Element name="videoElement">
    <VideoWrapper>
      <Video controls>
        <source src={src} type="video/mp4" />
        {children}
      </Video>
    </VideoWrapper>
  </Element>
);

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 20px;
`;

// 円グラフのデータとオプションを設定
const graph1 = {
  labels: ["利用したい", "やや利用したい", "どちらとも言えない"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const graph2 = {
  labels: ["オプション1", "オプション2", "オプション3"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const doughnutOptions = {
  plugins: {
    datalabels: {
      color: "#fff", // ラベルの文字色
      font: {
        weight: "bold" as const,
        size: 20,
      },
      formatter: (value: number, ctx: any) => {
        // データセットからラベルを取得
        let labels = ctx.chart.data.labels;
        return labels[ctx.dataIndex] + `: ${value}`;
      },
    },
  },
};

function App() {

  return (
    <Container>
      <Title>
        子供のための電子マネーデバイス
        <br />
        paycollon
      </Title>

      <Subheading>背景</Subheading>
      <Row>
        <Column>
          <SSubheading>電子マネーの普及</SSubheading>
          <Description>お小遣いに電子マネーを利用したいか？</Description>
          <Doughnut
            style={{ width: "200px", height: "200px" }}
            data={graph1}
            options={doughnutOptions}
          />
        </Column>
        <Column>
          <SSubheading>
            スマホを持っていない世代は
            <br />
            電子マネーを使いづらい
          </SSubheading>
          <Description>小学校低学年にスマホを持たせているか？</Description>
          <Doughnut
            style={{ width: "200px", height: "200px" }}
            data={graph2}
            options={doughnutOptions}
          />
          <Description>スマホを使い始める年齢は平均10.6歳</Description>
        </Column>
      </Row>

      <SSubheading>子供が電子マネーを使う不安</SSubheading>
      <Description>お金を使い始めるのではないか</Description>
      <Description>お金を重みを感じられないのではないか</Description>

      <Subheading>コンセプト</Subheading>
      <SSubheading>
        お金の使用感覚を養う
        <br />
        子供向けの電子マネー
      </SSubheading>

      <Subheading>課題</Subheading>
      <SSubheading>
        現金では当たり前のことが、電子マネーでは感じられない
      </SSubheading>
      <Row>
        <Column>
          <SSubheading>従来の電子マネー</SSubheading>
          <SSubheading>paycollon</SSubheading>
        </Column>
        <Column>
          <Description>どこから来たの？</Description>
          <Description>送信元のボイスメッセージ確認</Description>
        </Column>
        <Column>
          <Description>どのくらい使っていいの？</Description>
          <Description>使う分だけを家から持ち出せる</Description>
        </Column>
        <Column>
          <Description>今どのくらい入っているの？</Description>
          <Description>振って残高確認</Description>
        </Column>
      </Row>

      <Subheading>TARGET</Subheading>
      <SSubheading>コアターゲットは小学生（6~12歳）</SSubheading>
      <Description>
        お小遣いをもらい始めた年代
        <br />
        計算を理解し始める年代
        <br />
        スマホを持っていない年代
        <br />
        （スマホを持ち始めるのは平均11歳）
      </Description>

      <Subheading>PERSONA</Subheading>
      <SSubheading>
        神奈川県 横須賀市在住の34歳夫婦
        <br />
        年収：1000万円（夫婦合わせて）
      </SSubheading>
      <Description>
        価値観：子供の教育に熱心な共働き夫婦（２人とも出世している）
        <br />
        　　　　子供のやりたいことを応援する
        <br />
        家族構成：夫婦、長女（核家族）
        <br />
        趣味：家族でキャンプ
        <br />
        利用しているSNS：YouTube、Instagram、X
        <br />
        生活習慣：子供を塾に週１で通わせている
        <br />
        　　　　　頑張ったときにはお小遣いをあげている
        <br />
        好きなサイトやアプリ：NewsPics、日経ビジネス
        <br />
        　　　　　　　　　　　KIDSNA（子育て情報アプリ）
        <br />
        よく読む雑誌：小学１年生、kodomoe（子育て雑誌）
        <br />
        好きなブランド：Patagonia
        <br />
        よく買い物をする店：ヨドバシカメラ
        <br />
        消費傾向：無暗に安い物は買わない、出すときには出す
      </Description>

      <Subheading>What's paycollon ?</Subheading>
      <Row>
        <Column>
          <SSubheading>子供が使用するデバイス</SSubheading>
          <SSubheading>paycollon</SSubheading>
        </Column>
        <Column>
          <SSubheading>と</SSubheading>
        </Column>
        <Column>
          <SSubheading>両親や祖父母が使用するアプリ</SSubheading>
        </Column>
      </Row>

      <Row>
        <Column>
          <Subheading>DESIGN POINT 1</Subheading>
          <SSubheading>貯金から少しずつ持ち出す</SSubheading>
        </Column>
        <Column>
          <SSubheading>と</SSubheading>
        </Column>
      </Row>

      <SSubheading>少しずつ持ち出すことで使い過ぎを防止</SSubheading>

      <Subheading>DESIGN POINT 2</Subheading>
      <SSubheading>
        どのくらい持っているか・どれくらい使ったかを体験できるUI
      </SSubheading>
      <Row>
        <Column>
          <SSubheading>決済したときの演出</SSubheading>
        </Column>
        <Column>
          <SSubheading>振った時は残高を表示</SSubheading>
        </Column>
      </Row>
      <Subheading>DESIGN POINT 3</Subheading>
      <SSubheading>お小遣いを一緒に届くボイスメッセージ</SSubheading>

      <Subheading>DESIGN POINT 4</Subheading>
      <SSubheading>大切にしたくなるデバイスの形状</SSubheading>

      <Description>
        持ち運びやすいサイズ感
        <br />
        所有感の湧きやすいオブジェ感
        <br />
        金銭を象徴する石のモチーフ
        <br />
        電子マネーと差別化する未来的すぎない有機的な形状
      </Description>

      <Subheading>DESIGN POINT 5</Subheading>
      <SSubheading>親も安心できる送金以外のアプリの機能</SSubheading>

      <Subheading>STORY MOVIE</Subheading>
    </Container>
  );
}

export default App;
