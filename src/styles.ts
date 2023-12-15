import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: #E7E6E6;
  min-height: 100vh;
  padding: 20px;
`;

export const TextBase = styled.h2`
  color: #333;
  margin: 100px 0 10px;
  font-size: 1.6em;
`;

export const Title = styled.h1`
  font-size: 3.5em;
  color: #333;
  margin: 40px 0;
`;

export const SubTitle = styled(Title)`
  font-size: 2.7em;
`;

export const Subheading = styled(TextBase)`
  font-size: 2em;
`;

export const Textproblem = styled(TextBase)`
  font-size: 1.5em;
`;

export const Textproblemcollon = styled(TextBase)`
  color: #30C986;
  font-size: 1.5em;
`;

export const Graphtext = styled(TextBase)`
  color: #f0f0f0;
`;

export const Highlight = styled.span`
  background-color: #30C986;
`;

export const Text = styled(TextBase)`
  color: #30C986;
  margin: 300px 0 10px;
  font-size: 2em;
`;

export const Desginp = styled(TextBase)`
  color: #333;
  margin: 300px 0 10px;
  font-size: 1.7em;
`;

export const Desgint = styled(TextBase)`
  color: #30C986;
  font-size: 2em;
`;

export const Desgint2 = styled(Desgint)`
  font-size: 1.9em;
`;

export const Huan = styled(TextBase)`
  margin: 300px 0 10px;
  font-size: 2em;
`;

export const Description = styled.p`
  color: #666;
  margin: 20px 0;
  font-size: 1.2em;
`;

export const Supplement = styled(Description)`
  font-size: 0.8em;
  text-align: left;
`;

export const VideoWrapper = styled.div`
  margin: 40px 0;
`;

export const Video = styled.video`
  width: 90%;
  max-width: 800px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VideoV = styled(Video)`
  max-width: 1000px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 20px;
`;

export const TitleColumn = styled(Column)`
  text-align: center;
`;

export const NarrowColumn = styled(Column)`
  flex: 0 1 auto;
  width: 100px;
  margin: 40px 20px;
`;

// 円グラフのコンテナスタイル
export const DoughnutContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
`;

export const DoughnutContainer2 = styled(DoughnutContainer)`
  width: 350px;
  height: 350px;
`;

// 画像のスタイル
export const ImageBase = styled.img`
  height: auto;
  margin-left: 20px;
`;

export const Imagelogo = styled(ImageBase)`
  width: 400px;
`;

export const Imagephone = styled(ImageBase)`
  width: 200px;
`;

// 吹き出しスタイル
export const BubbleBase = styled(Description)`
  width: 500px;
  position: relative;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Bubble = styled(BubbleBase)`
  margin: 200px auto 20px;
  font-size: 1.3em;
`;

export const Bubble2 = styled(BubbleBase)`
  margin: 10px auto 20px;
  font-size: 1.3em;
`;

export const CircleDescription = styled(Description)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
  margin: 100px auto 40px;
  border-radius: 50%;
  background-color: #30C986;
  color: #f0f0f0;
  padding: 20px;
  font-size: 1.4em;
  font-weight: bold;
`;

export const CircleDescription2 = styled(CircleDescription)`
  margin: 40px auto 0px;
`;

export const InvertedTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid #30C986;
  margin: 0px auto;
`;

export const ColumnCentered = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Imageコンポーネントの追加定義
export const Imageproblem = styled(ImageBase)`
  width: 180px;
`;

export const Imagehuman = styled(ImageBase)`
  width: 250px;
  margin: 300px 0 0px;
`;

export const Imagefamily = styled(ImageBase)`
  width: 300px;
`;

export const Imagepaycollon = styled(ImageBase)`
  width: 450px;
  margin: 60px auto 30px;
`;

export const Imageproto = styled(ImageBase)`
  width: 600px;
  margin: 30px auto;
  display: block;
`;

export const Imagepaycollonirasuto = styled(ImageBase)`
  width: 480px;
  margin: 300px auto 30px;
`;

export const Imagedevice = styled(ImageBase)`
  width: 450px;
  margin: 300px 0 30px;
`;

// BubbleDescriptionスタイルの定義
export const BubbleDescription = styled(Description)`
  width: 700px;
  margin: 40px auto;
  position: relative;
  background-color: #30C986;
  color: #f0f0f0;
  padding: 20px;
  border-radius: 25px;
  font-size: 1.7em;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:before, &:after {
    content: none;
  }
`;
