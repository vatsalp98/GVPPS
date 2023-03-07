import React from "react";
import { useMediaQuery } from "@mui/material";
import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";
import Services from "../components/CoachCard";
import "../css/coachScreen.css";

function GrandOpening() {
  const bool = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {bool === true ? <MobileBottomNav /> : <SideBar />}
      <div
        className="section centered"
        style={{ margin: "auto", marginLeft: "150px" }}
      >
        <div className="container">
          <article className="article-content">
            <p>
              <img
                className="alignnone size-full wp-image-452716"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1426.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1426.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1426-300x200.jpg 300w, 
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1426-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              <strong>[加拿大乐活网 Lahoo.ca 讯]</strong>{" "}
              9月18日，大温哥华乒乓球会于本拿比#102-2909 Bainbridge
              Ave正式成立。球会是BC省大温哥华地区唯一的非牟利组织机构，是服务、提供广大兵兵球爱好人士运动锻炼强身的场所，也是符合加拿大的多元文化的良好平台。同时也是培养训练青少年成为未来的大中小学、BC省、加拿大精英选手的基地。球会的成立得到大温地区乒乓爱好者的广泛参与和支持，相信随着球会日益壮大，必将会让社区的文体活动更加丰富多彩。加拿大乐活网全程报道本次成立仪式。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452724"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1532.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1532.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1532-300x200.jpg 300w, 
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1532-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452707"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1307.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1307.jpg 1499w,
     https://lahoo.ca/wp-content/uploads/2022/09/0J2A1307-300x200.jpg 300w,
      https://lahoo.ca/wp-content/uploads/2022/09/0J2A1307-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              出席大温哥华乒乓球会成立仪式的嘉宾有：本拿比市长Mike
              Hurley、本拿比市议员王白进、Create Urban Development
              总裁李林、Create Urban Development
              市场总监Claire、乒乓球爱好者/慈善家Akbar以及中山大学校友会校友等。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452714"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1404.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1404.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1404-300x200.jpg 300w,
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1404-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p style={{ "text-align": "center" }}>球会创始人胡旻教练致辞</p>
            <p>
              胡旻教练1988年来到加拿大，在过去的30年里，她一直是一名教师，曾经作为BC省青少年的主教练，并获得加拿大认证的三级教练。她培养出无数的优秀选手，包括学校、BC省以及全国的冠军无数。就在中国成都即将举办的世界锦标赛上，其中代表加拿大国家队的女队员，就曾由胡旻教练启蒙执教三年，为此她感到非常骄傲。
            </p>
            <p>
              胡旻教练在2002年首创一个非牟利乒乓球组织，整整的20年后，再次建立新的非牟利大温乒乓球会。在本拿比政府的关心大力支持下，尤其是在王白进市议员和乐活网帮助下，胡旻教练代表球会表示最衷心的感谢。虽然已经到了退休年龄。但胡旻教练热爱乒乓球事业的心没有改变，她表示将会在今后的岁月里，继续奉献社会。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452709"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1337.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1337.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1337-300x200.jpg 300w,
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1337-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              本拿比是一个拥抱未来的城市，大家现在所在的社区也同样如此。本拿比市长
              Mike Hurley
              感谢王白进市议员、胡旻教练、李林先生等人士对球会成立做出的贡献。在接下来的几年里，就在这片土地上，会建立一个非常繁荣的社区，Mike
              Hurley很高兴和大家一起在这里共同庆祝球会成立。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452710"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1363.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1363.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1363-300x200.jpg 300w,
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1363-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              王白进议员感谢市政府团队对大温乒乓球会的许可并在政策层面给予了最大的支持，帮助大温乒乓球会在这里成立了。同时王白进议员感谢李林先生为球会提供场地的支持，有场地之后球会就有了发展的根基；胡旻教练30年前就是乒乓球界的明星，由胡旻教练发起创办球会一定让球会在更高的起点得到更好发展。王白进议员从小就已经参与到了这项运动中，可以说这是他最为熟悉的运动，看到今天这么多孩子都来参加球会的开幕，他认为这才是对球会发展最为重要的。他很高兴成为球会的一份子，将来他也会成为胡旻教练的学生。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452712"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1370.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1370.jpg 1499w,
   https://lahoo.ca/wp-content/uploads/2022/09/0J2A1370-300x200.jpg 300w,
    https://lahoo.ca/wp-content/uploads/2022/09/0J2A1370-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              中山大学温哥华校友会长David
              Chen平时很喜欢打乒乓球，他很高兴能够找到这么好的地方，来到这里一定能让大家享受到乒乓球所带来的欢乐。非常感谢本拿比市政府及各界的关心，希望越来越多的孩子也能参与到这项运动中来。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452713"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1380.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1380.jpg 1499w, 
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1380-300x200.jpg 300w,
   https://lahoo.ca/wp-content/uploads/2022/09/0J2A1380-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              Create Urban
              Development是球会所在地块的业主，公司总裁李林也来到现场祝贺球会的成立，李林先生表示大家现在所在的社区大概有8000多个单位，最后的居民总量将会达到两万人以上。Create
              Urban
              Development在社区建设方面做出了很多努力，社区也会有更多的商业配套。他感谢本拿比市政府的远见和对整个城市规划的把控，他相信这个社区的发展会越来越好。当王白进议员在为乒乓球会场地奔走的时候，李林先生当即表示一定尽力协助，终于在大家的努力之下，球会有了现在无偿使用的场地。李林先生希望在他们的规划以及分期建设中，能够形成一个整体的社区中心并为球会保留一块场地，能让大家长久的享受乒乓球带来的快乐。
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452715"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1416.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1416.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1416-300x200.jpg 300w, 
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1416-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p>
              本拿比教育局委员Larry
              Hayes：“我同王白进议员有过深入的讨论，那就是建立一个乒乓球项目，这将有可能成为我们高中教育的一部分，现在我们有曲棍球，排球等等球类的项目，乒乓球也可以作为其中之一，成为课程的一部分。本拿比有相当数量的华裔居民，大部分华裔居民都擅长乒乓球这项运动，乒乓这项运动在世界上也受到广泛的欢迎，相信社区所有族裔的居民都可以参与并享受这项运动。也许在不久的将来，加拿大也会成为世界顶级的乒乓球强国。所以我十分愿意推动乒乓球在中学的发展。感谢胡旻教练，感谢大家为乒乓在社区的发展做出的贡献。”
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452736"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1309-1.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1309-1.jpg 1499w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1309-1-300x200.jpg 300w,
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1309-1-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p style={{ "text-align": "center" }}>
              本次开幕庆典由大温哥华乒乓球会理事封庶主持
            </p>
            <p>
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452720"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1486.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1486.jpg 1499w,
   https://lahoo.ca/wp-content/uploads/2022/09/0J2A1486-300x200.jpg 300w, 
   https://lahoo.ca/wp-content/uploads/2022/09/0J2A1486-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />{" "}
              <img
                loading="lazy"
                className="alignnone size-full wp-image-452722"
                src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1499.jpg"
                alt=""
                srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1499.jpg 1499w,
     https://lahoo.ca/wp-content/uploads/2022/09/0J2A1499-300x200.jpg 300w, 
     https://lahoo.ca/wp-content/uploads/2022/09/0J2A1499-768x512.jpg 768w"
                sizes="(max-width: 1499px) 100vw, 1499px"
                data-tag="bdshare"
                width="1499"
                height="1000"
              />
            </p>
            <p style={{ "text-align": "center" }}>
              <strong>大温哥华乒乓球会</strong>
            </p>
            <p>
              地址：#102-2909 Bainbridge Ave Burnaby, BC V5A 2S9
              <br />
              电话：604-551-0896
            </p>
            <p>
              本球会是BC省大温哥华地区唯—的非牟利组织机构，是服务、提供广大兵兵球爱好人士运动锻炼强身的场所，也是符合加拿大的多元文化的良好平台。为培养训练一批青少年成为未来的大中小学、BC省、加拿大精英选手的基地。
            </p>
            <p>
              <strong>开馆时间：</strong>
            </p>
            <p>
              周一至周六 10 AM-9 PM
              <br />
              周日 10 AM- 7 PM
            </p>
            <p>
              1.会员费：18岁以下青少年及55岁以上＄20/年，成年：＄40/年
              <br />
              2.进场费：会员价：$5/次，非会员价：＄7/次
              <br />
              时间限定为3小时，超过附加＄2
              <br />
              (疫情期间特殊，暂不适宜)
              <br />
              3.月票费：本会会员享受＄60/月
              <br />
              4. 训练费：全部班课均收费＄20/人/次
            </p>
            <p>
              <strong>开幕仪式花絮：</strong>
            </p>
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452717"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1460.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1460.jpg 1499w, 
https://lahoo.ca/wp-content/uploads/2022/09/0J2A1460-300x200.jpg 300w,
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1460-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452718"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1475.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1475.jpg 1499w, 
 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1475-300x200.jpg 300w,
  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1475-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452726"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1581.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1581.jpg 1499w,
   https://lahoo.ca/wp-content/uploads/2022/09/0J2A1581-300x200.jpg 300w,
    https://lahoo.ca/wp-content/uploads/2022/09/0J2A1581-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452727"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1591.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1591.jpg 1499w,
       https://lahoo.ca/wp-content/uploads/2022/09/0J2A1591-300x200.jpg 300w, 
       https://lahoo.ca/wp-content/uploads/2022/09/0J2A1591-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452703"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1275.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1275.jpg 1499w, 
       https://lahoo.ca/wp-content/uploads/2022/09/0J2A1275-300x200.jpg 300w,
        https://lahoo.ca/wp-content/uploads/2022/09/0J2A1275-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452704"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1283.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1283.jpg 1499w,
            https://lahoo.ca/wp-content/uploads/2022/09/0J2A1283-300x200.jpg 300w, 
            https://lahoo.ca/wp-content/uploads/2022/09/0J2A1283-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452705"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1299.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1299.jpg 1499w,
              https://lahoo.ca/wp-content/uploads/2022/09/0J2A1299-300x200.jpg 300w, 
              https://lahoo.ca/wp-content/uploads/2022/09/0J2A1299-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452706"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1300.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1300.jpg 
                1499w, https://lahoo.ca/wp-content/uploads/2022/09/0J2A1300-300x200.jpg 300w,
                 https://lahoo.ca/wp-content/uploads/2022/09/0J2A1300-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452711"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1365.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1365.jpg 1499w,
                  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1365-300x200.jpg 300w, 
                  https://lahoo.ca/wp-content/uploads/2022/09/0J2A1365-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />{" "}
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452723"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1504.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1504.jpg 1499w, 
                    https://lahoo.ca/wp-content/uploads/2022/09/0J2A1504-300x200.jpg 300w,
                     https://lahoo.ca/wp-content/uploads/2022/09/0J2A1504-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452728"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1626.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1626.jpg 1499w, 
                       https://lahoo.ca/wp-content/uploads/2022/09/0J2A1626-300x200.jpg 300w,
                        https://lahoo.ca/wp-content/uploads/2022/09/0J2A1626-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />{" "}
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452729"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1629.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1629.jpg 1499w,
                          https://lahoo.ca/wp-content/uploads/2022/09/0J2A1629-300x200.jpg 300w, 
                          https://lahoo.ca/wp-content/uploads/2022/09/0J2A1629-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />{" "}
            <img
              loading="lazy"
              className="alignnone size-full wp-image-452730"
              src="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1635.jpg"
              alt=""
              srcset="https://lahoo.ca/wp-content/uploads/2022/09/0J2A1635.jpg 1499w,
                           https://lahoo.ca/wp-content/uploads/2022/09/0J2A1635-300x200.jpg 300w,
                            https://lahoo.ca/wp-content/uploads/2022/09/0J2A1635-768x512.jpg 768w"
              sizes="(max-width: 1499px) 100vw, 1499px"
              data-tag="bdshare"
              width="1499"
              height="1000"
            />
           
  
           
           
          </article>
        </div>
      </div>
    </>
  );
}

export default GrandOpening;
