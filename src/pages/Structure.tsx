import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from '@/components/ui/accordion';
import {
    TabDes,
    TabHeader,
    TabImage,
    TabImageContainer,
    TabItem,
    TabList,
    TabsProvider,
} from '@/components/ui/image-tab';
import rectorImage from '@/assets/rector.png';
import prorectorImage from '@/assets/prorector.png';
import prorectorImage1 from '@/assets/prorector1.png';
function Structure() {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Руководство академии</h2>

            <TabsProvider defaultValue="rector">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Табы (левая часть на больших экранах) */}
                    <TabList className="md:col-span-5 space-y-4">
                        <TabItem value="rector">
                            <TabHeader value="rector">Ректор</TabHeader>
                            <TabDes value="rector">
                                <div className="bg-[#F2F2F2] text-black p-4 rounded-md">
                                    <p> Мерзадинов Ергали Серикбаевич</p>
                                </div>
                            </TabDes>
                        </TabItem>

                        <TabItem value="prorector1">
                            <TabHeader value="prorector1">Первый проректор по стратегическому развитию и административным вопросам</TabHeader>
                            <TabDes value="prorector1">
                                <div className="bg-[#F2F2F2] text-black p-4 rounded-md">
                                    <p> Жангарашев Тлеу Касенович</p>
                                </div>
                            </TabDes>
                        </TabItem>

                        <TabItem value="prorector2">
                            <TabHeader value="prorector2">Проректор по учебной деятельности и IT-развитию</TabHeader>
                            <TabDes value="prorector2">
                                <div className="bg-[#F2F2F2] text-black p-4 rounded-md">
                                    <p> Шагатаев Даурен Кайрбекович</p>
                                </div>
                            </TabDes>
                        </TabItem>
                    </TabList>

                    {/* Фото (правая часть или снизу на мобилках) */}
                    <TabImageContainer className="md:col-span-7 w-full ">
                        <TabImage value="rector">
                            <img
                                src={rectorImage}
                                alt="Ректор Академии"
                                className="w-full h-full max-h-[500px] object-contain rounded-md "
                            />
                        </TabImage>
                        <TabImage value="prorector1">
                            <img
                                src={prorectorImage}
                                alt="Проректор Академии"
                                className="w-full h-full max-h-[500px] object-contain rounded-md"
                            />
                        </TabImage>
                        <TabImage value="prorector2">
                            <img
                                src={prorectorImage1}
                                alt="Проректор по IT"
                                className="w-full h-full max-h-[500px] object-contain rounded-md"
                            />
                        </TabImage>
                    </TabImageContainer>
                </div>
            </TabsProvider>


            <div className="pt-20 ">
                <Accordion defaultValue={'item-1'} multiple>
                    <AccordionItem value="item-1">
                        <AccordionHeader>
                            Центр обучения и повышения квалификации по финансовому мониторингу
                        </AccordionHeader>
                        <AccordionPanel>
                            Направление деятельности — повышение кадрового потенциала с последующей сертификацией на системной основе всех участников национальной системы ПОД/ФТ:
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Субъектов финансового мониторинга: сотрудников высшего менеджмента, комплаенс-служб, фронт-офисов БВУ, финансовых учреждений и нефинансовых организаций (УНФПП), а также сотрудников первой линии защиты.</li>
                                <li>Государственных органов, осуществляющих контроль и надзор за соблюдением СФМ требований законодательства о ПОД/ФТ, с учётом стандартов ФАТФ и международного опыта.</li>
                                <li>Правоохранительных/специальных государственных органов — по линии ПОД/ФТ.</li>
                            </ul>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionHeader>
                            Научный центр IT технологий
                        </AccordionHeader>
                        <AccordionPanel>
                            Основные направления деятельности:
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>разработка программных продуктов;</li>
                                <li>внедрение RPA технологий (цифровой сотрудник);</li>
                                <li>разработка инструментов кибергигиены;</li>
                                <li>оцифровка бизнес-процессов;</li>
                                <li>техническая поддержка информационных ресурсов.</li>
                            </ul>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionHeader>
                            Научно-исследовательский институт
                        </AccordionHeader>
                        <AccordionPanel>
                            Основными задачами научно-исследовательской деятельности являются:
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>изучение передовых практик и методов работы участников международной системы ПОД/ФТ;</li>
                                <li>приоритетное развитие фундаментальных знаний посредством проведения НИР и аналитических исследований для повышения рейтинга соответствия Казахстана международным стандартам ПОД/ФТ;</li>
                                <li>прогнозирование, профилактика и предупреждение рисков, угроз и уязвимостей в сфере ПОД/ФТ;</li>
                                <li>формирование научной базы и единого научного пространства для национальных антиотмывочных систем;</li>
                                <li>разработка и актуализация научно-методических и учебно-методических материалов для образовательных программ, а также мероприятий: курсов, семинаров, круглых столов и конференций.</li>
                            </ul>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default Structure;
