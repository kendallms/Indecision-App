console.log('App.js is running');

const appInfo = {
    title: 'Indecision App',
    subtitle: 'An app for when you cannot decide',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderForm();
    }
}

// create remove all button above list 
// onClick handler to wipe array appInfo.options and rerender 

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const removeOptions = () => {
    appInfo.options = [];
    renderForm();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum];
    alert(option);
}

    const renderForm = () => {
        const template = (
            <div>
                <h1>{appInfo.title}</h1>
                {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
                <p>{appInfo.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
                <button disabled={appInfo.options.length===0} onClick={makeDecision}>What should I do?</button>
                <button onClick={removeOptions} className="button-remove">Remove Options</button>
                <ol>{
                    appInfo.options.map((option) => {
                    return <li key={option}>{option}</li>
                    })
                     }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
        ReactDOM.render(template, appRoot);
    }

    renderForm();
