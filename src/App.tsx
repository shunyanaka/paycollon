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
  font-size: 3.5em; // タイトルのフォントサイズを大きく
  color: #333; // ダークグレイの色
  margin: 40px 0;
`;

const SubTitle = styled.h1`
  font-size: 2.7em; // タイトルのフォントサイズを大きく
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
const Textproblem = styled.h2`
  color: #333; // ここで色をダークグレイに設定
  margin: 100px 0 10px; // 上下のマージンを適宜調整
  font-size: 1.5em; // 小見出しのフォントサイズ
`;

const Text = styled.h2`
  color: #333; // ここで色をダークグレイに設定
  margin: 300px 0 10px; // 上下のマージンを適宜調整
  font-size: 2em; // 小見出しのフォントサイズ
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

const VideoV = styled.video`
  width: 90%;
  max-width: 1000px; // ビデオの最大幅を大きく
  margin-top: 20px;
  border-radius: 10px; // ビデオの角を丸く
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // ビデオに影を付ける
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
      <Video autoPlay loop controls>
        <source src={src} type="video/mp4" />
        {children}
      </Video>
    </VideoWrapper>
  </Element>
);


const VideoVoice = ({
  src,
  children,
}: {
  src: string;
  children?: ReactNode;
}) => (
  <Element name="videoElement">
    <VideoWrapper>
      <VideoV autoPlay loop controls>
        <source src={src} type="video/mp4" />
        {children}
      </VideoV>
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

const TitleColumn = styled.div`
flex: 1; // フレックス項目の伸縮率を1に設定
text-align: center; // テキストを中央揃え
`;

const NarrowColumn = styled(Column)`
  flex: 0 1 auto; // フレックス項目の成長と縮小を制御
  width: 100px; // 列の幅を100ピクセルに設定（適宜調整）
  margin: 40px 20px; // 左右のマージンを保持
`;

// 円グラフのデータとオプションを設定
const graph1 = {
  labels: [
    "利用したい",
    "やや利用したい",
    "どちらとも言えない",
    "  やや利用\nしたくない",
    "    利用\nしたくない",
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
  width: 500px; // ここで円グラフのサイズを調整
  height: 500px;
  margin: auto; // 中央揃えにする場合
`;

const DoughnutContainer2 = styled.div`
  width: 350px; // ここで円グラフのサイズを調整
  height: 350px;
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
        return labels[ctx.dataIndex] + `\n     ${value}%`;
      },
    },
  },
};

const doughnutOptions2 = {
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
        return labels[ctx.dataIndex] + `\n     ${value}%`;
      },
    },
  },
};

// タイトルと画像を横に並べるためのフレックスボックスコンポーネント
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  margin: 250px 50px 200px; // 適宜調整
`;

// 画像を表示するためのコンポーネント
const Imagelogo = styled.img`
  width: 400px; // 画像のサイズを適宜調整
  height: auto;
`;

const Imagephone = styled.img`
  width: 200px; // 画像のサイズを適宜調整
  height: auto;
`;

// 画像を表示するためのコンポーネント
const Imageproblem = styled.img`
  width: 180px; // 画像のサイズを適宜調整
  height: auto;
  margin-left: 20px; // タイトルとの間隔を調整
`;

const Imagehuman = styled.img`
  width: 250px; // 画像のサイズを適宜調整
  height: auto;
  margin: 300px 0 0px; // タイトルとの間隔を調整
`;

const Imagefamily = styled.img`
  width: 300px; // 画像のサイズを適宜調整
  height: auto;
  margin: 0px 0 0px; // タイトルとの間隔を調整
`;

const Imagepaycollon = styled.img`
  width: 450px; // 画像のサイズを適宜調整
  height: auto;
  margin: 60px auto 30px; // タイトルとの間隔を調整
`;

const Imageproto = styled.img`
  width: 600px; // 画像のサイズを適宜調整
  height: auto;
  margin: 30px auto; // タイトルとの間隔を調整
  display: block;/
`;

const Imagepaycollonirasuto = styled.img`
  width: 500px; // 画像のサイズを適宜調整
  height: auto;
  margin: 300px auto 30px; // タイトルとの間隔を調整
`;

const BubbleDescription = styled(Description)`
  width: 700px; // 吹き出しの幅を300pxに設定
  margin: 40px auto; // 上下のマージンは20px、左右は自動で中央揃え
  position: relative;
  background-color: #f0f0f0; // 吹き出しの背景色
  color: #333; // テキストの色
  padding: 20px; // 内側の余白
  border-radius: 25px; // 角を丸くする
  font-size: 1.7em;

  &:before,
  &:after {
    content: none;
  }
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
`;

const Bubble = styled(Description)`
  width: 500px; // 吹き出しの幅を300pxに設定
  margin: 200px auto 20px; // 上下のマージンは20px、左右は自動で中央揃え
  position: relative;
  background-color: #f0f0f0; // 吹き出しの背景色
  color: #333; // テキストの色
  padding: 20px; // 内側の余白
  border-radius: 25px; // 角を丸くする
  font-size: 1.3em;

  &:before,
  &:after {
    content: none;
  }
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
`;

const Bubble2 = styled(Description)`
  width: 500px; // 吹き出しの幅を300pxに設定
  margin: 10px auto 20px; // 上下のマージンは20px、左右は自動で中央揃え
  position: relative;
  background-color: #f0f0f0; // 吹き出しの背景色
  color: #333; // テキストの色
  padding: 20px; // 内側の余白
  border-radius: 25px; // 角を丸くする
  font-size: 1.3em;

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
  width: 190px; // 円の直径
  height: 190px;
  margin: 100px auto 40px; // 自動で中央揃え
  border-radius: 50%; // 円形にする
  background-color: #f0f0f0; // 背景色
  color: #333; // テキストの色
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
  padding: 20px; // 内側の余白
  font-size: 1.4em;
`;

const CircleDescription2 = styled(Description)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px; // 円の直径
  height: 190px;
  margin: 40px auto 0px; // 自動で中央揃え
  border-radius: 50%; // 円形にする
  background-color: #f0f0f0; // 背景色
  color: #333; // テキストの色
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 影を追加
  padding: 20px; // 内側の余白
  font-size: 1.4em;
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
        <TitleColumn>
          <SubTitle>子供のための<br />電子マネーデバイス</SubTitle>
          <Title>paycollon</Title>
        </TitleColumn>
        <TitleColumn>
          <Imagelogo src="images/logo.png" alt="paycollonのロゴ" />
        </TitleColumn>
      </TitleRow>

      <Text>BACKGROUND</Text>
      <Row>
        <Column>
          <SSubheading>電子マネーの普及</SSubheading>
          <SSubheading>お小遣いに電子マネーを利用したいか？</SSubheading>
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
          <SSubheading>小学校低学年にスマホを持たせているか？</SSubheading>
          <DoughnutContainer2>
            <Doughnut data={graph2} options={doughnutOptions2} />
          </DoughnutContainer2>
          <SSubheading>スマホを使い始める年齢は平均10.6歳</SSubheading>
        </Column>
      </Row>

      <Text>子供が電子マネーを使う不安</Text>
      <BubbleDescription>お金を使いすぎるのではないか</BubbleDescription>
      <BubbleDescription>
        お金を重みを感じられないのではないか
      </BubbleDescription>

      <Text>CONCEPT</Text>
      <Subheading>
        お金の使用感覚を養う子供向けの電子マネー
      </Subheading>

      <Text>PROBLEM</Text>
      <SSubheading>
        現金では当たり前のことが、電子マネーでは感じられない
      </SSubheading>

      <Row>
        <Column>
          <Textproblem>従来の電子マネー</Textproblem>
          <Imageproblem src="images/densi.png" alt="paycollonのロゴ" />
          <Textproblem>paycollon</Textproblem>
          <Imageproblem src="images/paycollon.png" alt="paycollonのロゴ" />
        </Column>
        <Column>
          <CircleDescription>どこから来たの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2>送信元の<br />ボイスメッセージ<br />確認</CircleDescription2>
        </Column>
        <Column>
          <CircleDescription>どのくらい<br />使っていいの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2>使う分だけを<br />家から持ち出せる</CircleDescription2>
        </Column>
        <Column>
          <CircleDescription>今どのくらい<br />入っているの？</CircleDescription>
          <InvertedTriangle />
          <CircleDescription2>振って<br />残高確認</CircleDescription2>
        </Column>
      </Row>

      <Row>
        <Column>
          <Text>TARGET</Text>
          <SSubheading>コアターゲットは小学生（6~12歳）</SSubheading>
          <SSubheading>
            お小遣いをもらい始めた年代
            <br />
            計算を理解し始める年代
            <br />
            スマホを持っていない年代
          </SSubheading>
        </Column>
        <Column>
          <Imagehuman src="images/human.png" alt="paycollonのロゴ" />
        </Column>
      </Row>

      <Row>
        <Column>
        <Bubble>キャッシュレス決済って便利だし、<br />今の内から慣れて欲しいなぁ</Bubble>
        <Bubble2>でも、電子マネーだとお金の重みが<br />感じられなくなるのかな…</Bubble2>
          <Imagefamily src="images/family.png" alt="paycollonのロゴ" />
        </Column>
        <Column>
          <Text>PERSONA</Text>
          <SSubheading>
            神奈川県 横須賀市在住の34歳夫婦
            <br />
            年収：1000万円（夫婦合わせて）
          </SSubheading>
        </Column>
      </Row>

      <Text>What's paycollon ?</Text>
      <Row>
        <Column>
          <Imagepaycollon src="images/base.png" alt="paycollonのロゴ" />
          <SSubheading>子供が使用するデバイス</SSubheading>
        </Column>

        <NarrowColumn>
          <SSubheading>&</SSubheading>
        </NarrowColumn>

        <Column>
          <Imageproblem src="images/phone2.png" alt="paycollonのロゴ" />
          <SSubheading>両親や祖父母が使用するアプリ</SSubheading>
        </Column>
      </Row>

      <Row>
        <Column>
          <Text>DESIGN POINT 1</Text>
          <SSubheading>貯金から少しずつ持ち出す</SSubheading>
        </Column>
        <Column>
          <Imagepaycollonirasuto
            src="images/paycollonirasuto.png"
            alt="paycollonのロゴ"
          />
        </Column>
      </Row>

      <SSubheading>少しずつ持ち出すことで使い過ぎを防止</SSubheading>
      <VideoComponent src="videos/rotate.mp4" />

      <Text>DESIGN POINT 2</Text>
      <SSubheading>
        どのくらい持っているか・どれくらい使ったかを体験できるUI
      </SSubheading>
      <Row>
        <Column>
          <VideoComponent src="videos/delite.mp4" />
          <SSubheading>決済したときの演出</SSubheading>
        </Column>
        <Column>
          <VideoComponent src="videos/shake.mp4" />
          <SSubheading>振った時は残高を表示</SSubheading>
        </Column>
      </Row>
      <Text>DESIGN POINT 3</Text>
      <SSubheading>お小遣いを一緒に届くボイスメッセージ</SSubheading>
      <VideoVoice src="videos/voice.mp4" />

      <Row>
        <Column>
          <Text>DESIGN POINT 4</Text>
          <SSubheading>大切にしたくなるデバイスの形状</SSubheading>

          <SSubheading>
            持ち運びやすいサイズ感
            <br />
            所有感の湧きやすいオブジェ感
            <br />
            金銭を象徴する石のモチーフ
          </SSubheading>
        </Column>
        <Column>
          <Imagepaycollonirasuto
            src="images/collondemo.png"
            alt="paycollonのロゴ"
          />
        </Column>
      </Row>

      <Text>DESIGN POINT 5</Text>
      <SSubheading>親も安心できる送金以外のアプリの機能</SSubheading>
      <Row>
        <Column>
          <Imagephone src="images/search.png" alt="paycollonのロゴ" />
          <SSubheading>探す</SSubheading>
        </Column>
        <Column>
          <Imagephone src="images/history.png" alt="paycollonのロゴ" />
          <SSubheading>履歴</SSubheading>
        </Column>
        <Column>
          <Imagephone src="images/learn.png" alt="paycollonのロゴ" />
          <SSubheading>学ぶ</SSubheading>
        </Column>
        <Column>
          <Imagephone src="images/home.png" alt="paycollonのロゴ" />
          <SSubheading>ホーム</SSubheading>
        </Column>
      </Row>

      <Text>PROTOTYPE</Text>
      <Imageproto src="images/proto1.png" alt="paycollonのロゴ" />
      <Imageproto src="images/proto2.png" alt="paycollonのロゴ" />
      <Imageproto src="images/proto3.png" alt="paycollonのロゴ" />
    </Container>
  );
}

export default App;
