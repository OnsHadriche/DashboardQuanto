import CardCompanies from 'components/CardCompanies';
import dataProvider from '../../../assets/images/home/dataProvider.jpeg'
import alpaca from '../../../assets/images/home/alpaca.png'
import yahoofinance from '../../../assets/images/home/yahoofinance.png'
import vbt from '../../../assets/images/home/vbt.png'
function Company() {
    const companies = [
        {
            title: 'Alpha vantage',
            image: dataProvider
        },
        {
            title: 'Alpaca',
            image: alpaca
        },
        {
            title: 'YahooFinance',
            image: yahoofinance
        },
        {
            title: 'VectorBt PRO',
            image: vbt
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
