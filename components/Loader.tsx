import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CloudLoader() {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* <DotLottieReact
        src="https://lottie.host/4b361a9a-6cbc-4cfc-be1e-350f5e800162/WucsScGwaM.lottie"
        loop
        autoplay
        className="w-150"
      /> */}
      <DotLottieReact
        src="https://lottie.host/8cf21bd6-2910-4d9f-bb53-52724b466734/6QAE7SyjPq.lottie"
        loop
        autoplay
      />
      <span className="text-xl">Cargando...</span>
    </div>
  );
}
