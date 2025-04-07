export default function Contacts() {
    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-10">
            <div className="max-w-md space-y-4">
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

                <div className="flex gap-4 pt-2">
                    <a href="#" aria-label="Instagram">
                    </a>
                    <a href="#" aria-label="Telegram">
                    </a>
                </div>
            </div>

            <div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaad75e4229d0b3e8cb9b0b81ffebd208cdd0c72655bc1a4a843d68b9c0c13a50&amp;source=constructor"
                    width="500"
                    height="400"
                    frameBorder="0"
                    className="rounded-lg shadow-md"
                    title="Карта местоположения"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
