import instagramIcon from '../assets/Instagram_icon-tQ8pURR2.png';
import telegramIcon from '../assets/Telegram_Messenger-DdoFzWvo.png';

export default function Contacts() {
    return (
        <div className="min-h-screen p-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-20">
            <nav className="max-w-md space-y-6 p-6">
                    <h2 className="text-2xl font-bold">Контакты</h2>
                    <p>Астана, Казахстан</p>

                    <div>
                        <p className="font-semibold">Юридический адрес:</p>
                        <p>ул. Ш. Уалиханова, 11</p>
                    </div>

                    <div>
                        <p className="font-semibold">Фактический адрес:</p>
                        <p>ул. Мангилик Ел, 53/1</p>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600">
                        <a href="tel:+77087168416">+7 708 716 8416</a>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600">
                        <a href="mailto:aml.academy2023@gmail.com">aml.academy2023@gmail.com</a>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href="https://www.instagram.com/aml_academy/" className="roundeContacts">
                            <img src={instagramIcon} alt="instagram" className="w-12 h-12" />
                        </a>
                        <a href="https://t.me/aml_academy_23" className="roundeContacts">
                            <img src={telegramIcon} alt="telegram" className="w-12 h-12" />
                        </a>
                    </div>

            </nav>

            <div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A153ceab27880d3d118fed2e4bdc07a1ed42f115823a581773e817b66c8870534&amp;source=constructor"
                    width="743"
                    height="503"
                    frameBorder="0"
                    className="rounded-lg shadow-md"
                    title="Карта местоположения AML Academy"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
