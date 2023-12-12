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
  labels: [
    "利用したい",
    "やや利用したい",
    "どちらとも言えない",
    "やや利用したくない",
    "利用したくない",
  ],
  datasets: [
    {
      data: [14, 26.4, 32.2, 13.2, 14.2],
      backgroundColor: ["#FFA500", "#FFD700", "#A9A9A9", "#C0C0C0", "#D3D3D3"],
      hoverBackgroundColor: [
        "#FFA500",
        "#FFD700",
        "#A9A9A9",
        "#C0C0C0",
        "#D3D3D3",
      ],
    },
  ],
};

const graph2 = {
  labels: ["持っていない", "持っている"],
  datasets: [
    {
      data: [76.6, 24.4],
      backgroundColor: ["#FFA500", "#A9A9A9"],
      hoverBackgroundColor: ["#FFA500", "#A9A9A9"],
    },
  ],
};

// 円グラフのコンテナをスタイル付きで定義
const DoughnutContainer = styled.div`
  width: 600px; // ここで円グラフのサイズを調整
  height: 600px;
  margin: auto; // 中央揃えにする場合
`;

const doughnutOptions = {
  cutout: 0, // 穴のサイズを設定
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
        return labels[ctx.dataIndex] + `\n${value}%`;
      },
    },
  },
};

// タイトルと画像を横に並べるためのフレックスボックスコンポーネント
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px; // 適宜調整
`;

// 画像を表示するためのコンポーネント
const Imagelogo = styled.img`
  width: 200px; // 画像のサイズを適宜調整
  height: auto;
  margin-left: 20px; // タイトルとの間隔を調整
`;

// 画像を表示するためのコンポーネント
const Imageproblem = styled.img`
  width: 200px; // 画像のサイズを適宜調整
  height: auto;
  margin-left: 20px; // タイトルとの間隔を調整
`;

const BubbleDescription = styled(Description)`
  width: 500px; // 吹き出しの幅を300pxに設定
  margin: 20px auto; // 上下のマージンは20px、左右は自動で中央揃え
  position: relative;
  background-color: #f0f0f0; // 吹き出しの背景色
  color: #333; // テキストの色
  padding: 20px; // 内側の余白
  border-radius: 25px; // 角を丸くする
  font-size: 1.2em;

  &:before,
  &:after {
    content: none;
  }
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
`;

const CircleDescription = styled(Description)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px; // 円の直径
  height: 200px;
  margin: 100px auto 40px; // 自動で中央揃え
  border-radius: 50%; // 円形にする
  background-color: #f0f0f0; // 背景色
  color: #333; // テキストの色
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
  padding: 20px; // 内側の余白
  font-size: 1.2em;
`;

const CircleDescription2 = styled(Description)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px; // 円の直径
  height: 200px;
  margin: 40px auto 0px; // 自動で中央揃え
  border-radius: 50%; // 円形にする
  background-color: #f0f0f0; // 背景色
  color: #333; // テキストの色
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
  padding: 20px; // 内側の余白
  font-size: 1.2em;
`;

const InvertedTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent; // 左側の透明な境界
  border-right: 20px solid transparent; // 右側の透明な境界
  border-top: 40px solid #333; // 上側の色付きの境界（逆三角形の色）
  margin: 0px auto; // 位置調整
`;



function App() {
  return (
    <Container>
      <TitleRow>
        <Title>
          子供のための電子マネーデバイス
          <br />
          paycollon
        </Title>
        <Imagelogo src="images/logo.png" alt="paycollonのロゴ" />
        {/* 画像のパスと代替テキストを指定 */}
      </TitleRow>

      <Subheading>背景</Subheading>
      <Row>
        <Column>
          <SSubheading>電子マネーの普及</SSubheading>
          <Description>お小遣いに電子マネーを利用したいか？</Description>
          <DoughnutContainer>
            <Doughnut data={graph1} options={doughnutOptions} />
          </DoughnutContainer>
        </Column>

        <Column>
          <SSubheading>
            スマホを持っていない世代は
            <br />
            電子マネーを使いづらい
          </SSubheading>
          <Description>小学校低学年にスマホを持たせているか？</Description>
          <DoughnutContainer>
            <Doughnut data={graph2} options={doughnutOptions} />
          </DoughnutContainer>
          <Description>スマホを使い始める年齢は平均10.6歳</Description>
        </Column>
      </Row>

      <SSubheading>子供が電子マネーを使う不安</SSubheading>
      <BubbleDescription>お金を使いすぎるのではないか</BubbleDescription>
      <BubbleDescription>
        お金を重みを感じられないのではないか
      </BubbleDescription>

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
          <Imageproblem src="images/densi.png" alt="paycollonのロゴ" />
          <SSubheading>paycollon</SSubheading>
          <Imageproblem src="images/paycollon.png" alt="paycollonのロゴ" />
        </Column>
        <Column>
          <CircleDescription>どこから来たの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2 >送信元のボイスメッセージ確認</CircleDescription2>
        </Column>
        <Column>
          <CircleDescription>どのくらい使っていいの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2>使う分だけを家から持ち出せる</CircleDescription2>
        </Column>
        <Column>
          <CircleDescription>今どのくらい入っているの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2>振って残高確認</CircleDescription2>
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
