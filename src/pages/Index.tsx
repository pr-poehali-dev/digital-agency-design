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
      description: 'Создаём интерфейсы, которые западают в душу и работают на бизнес',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Code2',
      title: 'Разработка',
      description: 'Пишем чистый код, который масштабируется и радует разработчиков',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Sparkles',
      title: 'Брендинг',
      description: 'Строим бренды, которые выделяются и запоминаются навсегда',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Rocket',
      title: 'Стратегия',
      description: 'Разрабатываем путь к успеху через данные и креативность',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const portfolio = [
    {
      title: 'FinTech App',
      category: 'Mobile & Web',
      image: '🏦',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: '🛍️',
      gradient: 'from-pink-600 to-orange-600'
    },
    {
      title: 'AI Dashboard',
      category: 'SaaS Product',
      image: '🤖',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Brand Identity',
      category: 'Branding',
      image: '✨',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const team = [
    { name: 'Алексей Волков', role: 'Creative Director', emoji: '🎨' },
    { name: 'Мария Соколова', role: 'Lead Developer', emoji: '💻' },
    { name: 'Дмитрий Орлов', role: 'UX Strategist', emoji: '🎯' },
    { name: 'Анна Белова', role: 'Brand Designer', emoji: '✨' }
  ];

  const process = [
    { step: '01', title: 'Исследование', desc: 'Погружаемся в бизнес и целевую аудиторию' },
    { step: '02', title: 'Стратегия', desc: 'Разрабатываем концепцию и архитектуру' },
    { step: '03', title: 'Дизайн', desc: 'Создаём визуальную магию и интерфейсы' },
    { step: '04', title: 'Разработка', desc: 'Воплощаем идеи в рабочий продукт' },
    { step: '05', title: 'Запуск', desc: 'Выводим проект в мир и масштабируем' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">THE WAY</h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Услуги', 'Портфолио', 'Процесс', 'Команда', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Начать проект
          </Button>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center relative pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl blob" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-7xl md:text-9xl font-black mb-6 gradient-text">
              THE WAY
            </h2>
            <p className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаём цифровые продукты, которые меняют правила игры
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 glow">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 hover:bg-white/10">
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center gradient-text">
            Что мы делаем
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 bg-card/50 backdrop-blur border-white/10 hover-lift cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center gradient-text">
            Наши работы
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, idx) => (
              <div
                key={idx}
                className={`relative h-96 rounded-3xl bg-gradient-to-br ${project.gradient} overflow-hidden group cursor-pointer hover-lift`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="text-8xl mb-4">{project.image}</div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg text-white/80">{project.category}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform translate-y-2 group-hover:translate-y-0 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="процесс" className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center gradient-text">
            Как мы работаем
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start group cursor-pointer"
              >
                <div className="text-6xl font-black text-primary/20 group-hover:text-primary transition-colors">
                  {item.step}
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-card/30 backdrop-blur border border-white/10 group-hover:border-primary/50 transition-all hover-lift">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="команда" className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center gradient-text">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card
                key={idx}
                className="p-8 text-center bg-card/50 backdrop-blur border-white/10 hover-lift cursor-pointer group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center gradient-text">
            Начнём работать
          </h2>
          <Card className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur border-white/10">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="bg-background/50 border-white/20 text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-background/50 border-white/20 text-lg py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  className="bg-background/50 border-white/20 text-lg min-h-32"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 glow"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold gradient-text">THE WAY</div>
            <div className="flex gap-6">
              {['Telegram', 'Instagram', 'Behance', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <p className="text-muted-foreground">© 2024 The Way Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
