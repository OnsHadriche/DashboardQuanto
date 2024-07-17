import CardCompanies from 'components/CardCompanies';

function Company() {
    const companies = [
        {
            title: 'Alpha vantage',
            image: '../../../assets/images/home/dataProvider.png'
        },
        {
            title: 'Alpaca',
            image: '../../../assets/images/home/alpaca.png'
        },
        {
            title: 'YahooFinance',
            image: '../../../assets/images/home/yahoofinance.png'
        },
        {
            title: 'VectorBt PRO',
            image: '../../../assets/images/home/vbt.png'
        }
    ];
    return (
        <div className="container-xxl mb-5 py-6">
            <div className="container">
                <div className="mb-4 text-center">
                    <h1>Built and powered by trusted companies</h1>
                    <p>
                        QuantoTrade is constructed using the best available resources provided by some of the most established companies in
                        the market
                    </p>
                </div>
                <div className="row g-2">
                    {companies.map((el, index) => (
                        <CardCompanies key={index} imageComp={el.image} titleComp={el.title} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Company;
