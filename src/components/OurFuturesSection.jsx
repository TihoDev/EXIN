import React from "react";
import BaseIcon from "./icon/BaseIcon";
import FutureCard from "./FutureCard";

const ourFuturesSectionData = [
  {
    id: 1,
    title: "فرمت Word و کاملا قابل ویرایش ",
    desc: "تمامی قالب ها در فرمت Word ارائه شده اند و میتوانید آن ها را به راحتی ویرایش کنید.",
    svg: "Edit",
    className: "order-1",
  },
  {
    id: 2,
    title: "کاملا رایگان ",
    desc: "دانلود و استفاده از این قالب ها بدون هیچ هزینه ای امکان پذیر است .",
    svg: "CrossEyesLaugh",
    className: "order-3 lg:order-2",
  },
  {
    id: 3,
    order: 4,
    title: "تنوع گسترده قالب ها",
    desc: "شامل انواع پروپوزال ، بیزنس پلن ، بیزنس مدل ، بوم ناب و بوم کسب و کار همراه با نسخه های متنوع از هر دسته هست . ",
    svg: "ThreeBooks",
    className: "order-4",
  },
  {
    id: 4,
    order: 5,
    title: "مناسب برای پروژه‌های مختلف",
    desc: "ایده‌آل برای پروژه‌های دانشگاهی، ارائه‌های حرفه‌ای، استارتاپ‌ها، کسب‌وکارهای نوپا و شرکت‌ها.",
    svg: "Doc",
    className: "order-5",
  },
  {
    id: 5,
    order: 6,
    title: "همراه با متن راهنما",
    desc: "هر قالب دارای راهنمای داخلی است که به شما کمک میکند سریع تر و موثرتر از آن استفاده کنید.",
    svg: "QuestionComment",
    className: "order-6",
  },
];
const OurFuturesSection = () => {
  return (
    <section className="mt-42 mb-20 lg:mb-42 mx-4 lg:mx-12 flex items-center justify-center">
      <div className="bg-white future-section-shadow-gradient rounded-[80px] lg:rounded-[200px] section-shadows">
        <div className="container pt-20 pb-26">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-title">
            ویژگی های قالب های اکسین
          </h2>
          <div className="our-futures-section">
            <div className="order-2 lg:order-3 grid-cols-1 hidden sm:block">
              <div className="place-items-center">
                <BaseIcon
                  id="ExinIcon3"
                  size={300}
                  disableGradient={true}
                  fillColor="#1E1328"
                  className="!hidden lg:!block"
                />
                <BaseIcon
                  id="ExinIcon3"
                  size={230}
                  disableGradient={true}
                  fillColor="#1E1328"
                  className="!hidden sm:!block lg:!hidden"
                />
              </div>
            </div>

            {ourFuturesSectionData.map((item) => (
              <FutureCard
                key={item.id}
                title={item.title}
                text={item.desc}
                svg={item.svg}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFuturesSection;
