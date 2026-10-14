import { Camera, Mail, Instagram, MapPin, Focus, Film } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { photographerPortrait } from "@/data/helpers";

const gearList = [
  { icon: Camera, name: "Sony A7R IV", desc: "主力全画幅，6100万像素捕捉极致细节" },
  { icon: Camera, name: "Leica M11 Monochrom", desc: "黑白专用，纯粹的光影记录者" },
  { icon: Focus, name: "FE 70-200mm F2.8 GM", desc: "长焦风光与人像，压缩视角的诗意" },
  { icon: Focus, name: "Summilux 50mm f/1.4", desc: "标准之眼，最接近人眼的自然视角" },
  { icon: Film, name: "Fujifilm X100V", desc: "日常街拍伴侣，旁轴的浪漫" },
  { icon: Focus, name: "FE 16-35mm F2.8 GM", desc: "超广角建筑与风光，空间的张力" },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", handle: "@light.gallery", href: "#" },
  { icon: Camera, name: "500px", handle: "光影集", href: "#" },
  { icon: Mail, name: "Email", handle: "contact@gallery.com", href: "mailto:contact@gallery.com" },
];

export default function About() {
  return (
    <div className="relative z-10 min-h-screen pt-32">
      {/* 摄影师故事 */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">ABOUT</p>
            <h1 className="font-serif text-5xl md:text-6xl text-paper-100 mb-16">关于我</h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <div className="relative overflow-hidden">
                <img
                  src={photographerPortrait}
                  alt="摄影师肖像"
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="absolute inset-3 border border-gold-400/20" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6 text-paper-300 leading-relaxed">
                <p className="font-serif text-2xl text-paper-100 italic">
                  "我开始拍照，是因为不想让美好的瞬间只留在记忆里。"
                </p>
                <p>
                  我是光影集的主理人，一个用镜头观看世界的旅行者。
                  从第一次按下快门至今，摄影已经陪伴我走过了十二个年头。
                </p>
                <p>
                  我偏爱自然光，喜欢在清晨和黄昏游走于山川与城市之间。
                  风景让我学会耐心，人像让我学会倾听，街拍让我学会观察，
                  而黑白摄影则教会我——剥离色彩之后，光影本身就是最美的语言。
                </p>
                <p>
                  这个网站收录了我近年来的部分作品。它们不是最完美的，
                  但每一张背后都有一个属于那个瞬间的故事。
                  希望你在这里，能找到一张与你共鸣的照片。
                </p>
                <div className="flex items-center gap-2 pt-4">
                  <MapPin className="w-4 h-4 text-gold-400" strokeWidth={1} />
                  <span className="text-sm text-paper-400">现居上海 · 持续行走中</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 器材清单 */}
      <section className="px-6 py-32 bg-ink-850">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">GEAR</p>
            <h2 className="font-serif text-4xl md:text-5xl text-paper-100">常用器材</h2>
            <p className="mt-4 text-paper-400">工具不是一切，但合适的工具让表达更自由</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gearList.map((gear, i) => (
              <ScrollReveal key={gear.name} delay={i * 60}>
                <div className="group border border-ink-600 p-8 hover:border-gold-400/40 transition-colors duration-500 h-full">
                  <gear.icon
                    className="w-8 h-8 text-gold-400 mb-4 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1}
                  />
                  <h3 className="font-serif text-xl text-paper-100 mb-2">{gear.name}</h3>
                  <p className="text-sm text-paper-400 leading-relaxed">{gear.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="px-6 py-32">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-gold-400 mb-3">CONTACT</p>
          <h2 className="font-serif text-4xl md:text-5xl text-paper-100 mb-6">保持联系</h2>
          <p className="text-paper-400 mb-12 max-w-xl mx-auto">
            无论是合作邀约、器材交流，还是单纯想聊聊摄影，都欢迎来找我
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex flex-col items-center gap-3 border border-ink-600 px-6 py-10 hover:border-gold-400/40 transition-colors duration-500"
              >
                <link.icon
                  className="w-7 h-7 text-paper-300 group-hover:text-gold-400 transition-colors duration-300"
                  strokeWidth={1}
                />
                <div>
                  <p className="text-sm text-paper-200">{link.name}</p>
                  <p className="text-xs text-paper-500 mt-1">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400/50" />
            <span className="font-serif italic text-paper-400">感谢你的来访</span>
            <span className="h-px w-12 bg-gold-400/50" />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
