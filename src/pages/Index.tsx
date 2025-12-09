import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: 'Palette',
      title: 'Дизайн',
      description: 'Рисуем интерфейсы, в которых хочется жить. Красиво, удобно и с душой 🌸',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: 'Code2',
      title: 'Разработка',
      description: 'Собираем сайты как конструктор LEGO — аккуратно, с любовью к деталям',
      color: 'from-rose-400 to-pink-500'
    },
    {
      icon: 'Sparkles',
      title: 'Брендинг',
      description: 'Помогаем бренду найти свой голос и стать узнаваемым среди тысяч',
      color: 'from-pink-500 to-fuchsia-400'
    },
    {
      icon: 'Heart',
      title: 'Стратегия',
      description: 'Думаем вместе с вами, как сделать продукт ещё лучше и успешнее',
      color: 'from-fuchsia-400 to-rose-400'
    }
  ];

  const portfolio = [
    {
      title: 'Финтех приложение',
      category: 'Мобильное и веб',
      image: '🌸',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Маркетплейс',
      category: 'E-commerce',
      image: '🎀',
      gradient: 'from-rose-400 to-pink-600'
    },
    {
      title: 'AI дашборд',
      category: 'SaaS продукт',
      image: '🦋',
      gradient: 'from-fuchsia-400 to-pink-500'
    },
    {
      title: 'Фирменный стиль',
      category: 'Брендинг',
      image: '🌺',
      gradient: 'from-pink-500 to-rose-400'
    }
  ];

  const team = [
    { name: 'Алексей', role: 'Креативный директор', emoji: '🎨' },
    { name: 'Мария', role: 'Главный разработчик', emoji: '💻' },
    { name: 'Дмитрий', role: 'UX стратег', emoji: '🎯' },
    { name: 'Анна', role: 'Бренд-дизайнер', emoji: '✨' }
  ];

  const process = [
    { step: '01', title: 'Знакомимся', desc: 'Узнаём о вашем проекте и мечтах за чашкой кофе' },
    { step: '02', title: 'Придумываем', desc: 'Рождаем идеи и выбираем самые классные' },
    { step: '03', title: 'Рисуем', desc: 'Создаём красоту, которая радует глаз' },
    { step: '04', title: 'Кодим', desc: 'Превращаем картинки в живой рабочий продукт' },
    { step: '05', title: 'Запускаем', desc: 'Показываем миру то, что создали вместе' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden japanese-pattern">
      <div className="fixed top-10 left-10 text-6xl opacity-20 sakura-float">🌸</div>
      <div className="fixed top-32 right-20 text-5xl opacity-15 sakura-float" style={{ animationDelay: '3s' }}>🌸</div>
      <div className="fixed top-64 left-1/3 text-4xl opacity-10 sakura-float" style={{ animationDelay: '7s' }}>🌸</div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-pink-200/50 soft-shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">THE WAY ✨</h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Услуги', 'Портфолио', 'Процесс', 'Команда', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:opacity-90 rounded-full">
            Поболтаем? 💬
          </Button>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center relative pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 animate-gradient"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="text-8xl mb-8">🌸</div>
            <h2 className="text-6xl md:text-8xl font-black mb-6 gradient-text leading-tight">
              THE WAY
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-12 max-w-3xl mx-auto font-light">
              Создаём сайты и приложения с заботой о людях.
              <br />
              Как хорошие друзья — искренне и от души 💕
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-pink-400 to-rose-400 hover:opacity-90 text-lg px-10 py-7 rounded-full soft-shadow">
                Давайте дружить! 🤝
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-10 py-7 rounded-full">
                Посмотреть работы ✨
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-32 relative wave-border bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center gradient-text">
            Чем мы можем помочь
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">С любовью делаем вот что 👇</p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-10 bg-white border-2 border-pink-100 hover-float cursor-pointer group rounded-3xl"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform soft-shadow`}>
                  <Icon name={service.icon as any} className="text-white" size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-32 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center gradient-text">
            Вот что мы сделали
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">Каждый проект — это маленькая история 📖</p>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, idx) => (
              <div
                key={idx}
                className={`relative h-96 rounded-3xl bg-gradient-to-br ${project.gradient} overflow-hidden group cursor-pointer hover-float soft-shadow`}
              >
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-9xl mb-6">{project.image}</div>
                  <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-xl text-white/90">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="процесс" className="py-32 bg-white wave-border">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center gradient-text">
            Как это происходит
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">Наш путь от знакомства до запуска 🚀</p>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-8 items-start group cursor-pointer"
              >
                <div className="text-7xl font-black text-pink-200 group-hover:text-pink-400 transition-colors">
                  {item.step}
                </div>
                <div className="flex-1 p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100 group-hover:border-pink-300 transition-all hover-float">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="команда" className="py-32 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center gradient-text">
            Знакомьтесь, это мы
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">Дружная команда энтузиастов 👋</p>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card
                key={idx}
                className="p-8 text-center bg-white border-2 border-pink-100 hover-float cursor-pointer group rounded-3xl"
              >
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">
                  {member.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-foreground/70">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-32 bg-white relative wave-border">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center gradient-text">
            Давайте создадим что-то вместе
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">Напишите нам — мы всегда рады новым знакомствам! 💌</p>
          <Card className="max-w-2xl mx-auto p-10 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-3xl soft-shadow">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Как вас зовут?"
                  className="bg-white border-2 border-pink-200 text-lg py-7 rounded-2xl focus:border-pink-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-white border-2 border-pink-200 text-lg py-7 rounded-2xl focus:border-pink-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашей идее... Мы очень хотим услышать! 🌟"
                  className="bg-white border-2 border-pink-200 text-lg min-h-40 rounded-2xl focus:border-pink-400"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:opacity-90 text-lg py-7 rounded-2xl soft-shadow"
              >
                Отправить сообщение 💌
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-br from-pink-50 to-rose-50 border-t-2 border-pink-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold gradient-text">THE WAY ✨</div>
            <div className="flex gap-6">
              {[
                { name: 'Telegram', emoji: '✈️' },
                { name: 'Instagram', emoji: '📷' },
                { name: 'Behance', emoji: '🎨' },
                { name: 'Dribbble', emoji: '🏀' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {social.emoji} {social.name}
                </a>
              ))}
            </div>
            <p className="text-foreground/60">С любовью © 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
