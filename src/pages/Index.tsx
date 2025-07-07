import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  downloadUrl: string;
}

const Index = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Электрическая схема блока питания",
      description:
        "Принципиальная схема импульсного блока питания 12В/5А с защитой от перегрузки",
      image: "/img/419e30a7-5356-40ed-9ee5-a65e55a0f300.jpg",
      category: "Электроника",
      downloadUrl: "#",
    },
    {
      id: "2",
      title: "Механизм редуктора",
      description:
        "Техническое описание планетарного редуктора с коэффициентом передачи 1:100",
      image: "/img/55d97443-6a0a-4788-88c9-9995de905122.jpg",
      category: "Механика",
      downloadUrl: "#",
    },
    {
      id: "3",
      title: "Конструкция моста",
      description:
        "Чертеж железобетонного автодорожного моста пролетом 25 метров",
      image: "/img/d879d16b-1400-4c82-a076-50ddd1b4b98b.jpg",
      category: "Строительство",
      downloadUrl: "#",
    },
    {
      id: "4",
      title: "Система вентиляции",
      description:
        "Схема приточно-вытяжной вентиляции для производственного помещения",
      image: "https://v3.fal.media/files/lion/Ay4F0GdIqPDBIJyVJkwdQ_output.png",
      category: "HVAC",
      downloadUrl: "#",
    },
    {
      id: "5",
      title: "Гидравлическая схема",
      description: "Принципиальная гидравлическая схема подъемного механизма",
      image: "/img/419e30a7-5356-40ed-9ee5-a65e55a0f300.jpg",
      category: "Гидравлика",
      downloadUrl: "#",
    },
    {
      id: "6",
      title: "Схема автоматизации",
      description:
        "Функциональная схема автоматизации технологического процесса",
      image: "/img/55d97443-6a0a-4788-88c9-9995de905122.jpg",
      category: "Автоматика",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-black">
                Инженерные схемы
              </h1>
              <p className="text-gray-600 mt-1">
                Коллекция технических чертежей и схем
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="Grid3X3" size={16} className="mr-2" />
                Сетка
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="List" size={16} className="mr-2" />
                Список
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-black mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-black hover:bg-gray-800 text-white"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Просмотр
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Инженерные схемы. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
