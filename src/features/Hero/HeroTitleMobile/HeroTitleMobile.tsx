import "./HeroTitleMobile.css";

interface Props {
  slogan: string;
}

export default function HeroTitleMobile({ slogan }: Props) {
  return (
    <div className="hero-title-mobile">
      <h1>Educación Musical DC</h1>
      <p>{slogan}</p>
    </div>
  );
}
