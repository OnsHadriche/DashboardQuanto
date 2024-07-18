import StepLeft from './StepLeft';
import StepRight from './StepRight';

function Steps() {
    const steps = [
        {
            id: '1',
            title: 'Create account',
            description:
                'The initial step is to sign up. By securely entering your information, you can start enjoying the benefits of our platform.',
            image: './src/assets/images/step1.png',
            propertyFlex: './src/assets/images/step1.png'
        },
        {
            id: '2',
            title: 'Input Parameters Form for Financial Data Analysis',
            description:
                "The second step is to enter the parameters required for analyzing financial data. The form includes fields for specifying the asset symbol (e.g., 'AAPL' for Apple Inc.), the start and end dates, and the timeframe for analysis indicating a daily timeframe. The interface is designed with a dark theme for a modern and visually appealing look.",
            image: './src/assets/images/step2.png',
            propertyFlex: `flex-column-reverse flex-lg-row`
        },
        {
            id: '3',
            title: 'Input Parameters Form for Financial Data Analysis',
            description:
                "The second step is to enter the parameters required for analyzing financial data. The form includes fields for specifying the asset symbol (e.g., 'AAPL' for Apple Inc.), the start and end dates, and the timeframe for analysis indicating a daily timeframe. The interface is designed with a dark theme for a modern and visually appealing look.",
            image: './src/assets/images/step2.png',
            propertyFlex: ` `
        },
        {
            id: '4',
            title: 'Input Parameters Form for Financial Data Analysis',
            description:
                "The second step is to enter the parameters required for analyzing financial data. The form includes fields for specifying the asset symbol (e.g., 'AAPL' for Apple Inc.), the start and end dates, and the timeframe for analysis indicating a daily timeframe. The interface is designed with a dark theme for a modern and visually appealing look.",
            image: './src/assets/images/step2.png',
            propertyFlex: `flex-column-reverse flex-lg-row`
        }
    ];
    return (
        <div className="container-xxl  mt-6 py-5" id="overview">
            <div className="container">
                {steps.map((item, index) =>
                    item.id % 2 != 0 ? <StepLeft key={index} item={item} /> : <StepRight key={index} item={item} />
                )}
            </div>
        </div>
    );
}

export default Steps;
