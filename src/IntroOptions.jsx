function IntroOptions ({titulo,list})
{
    return(
        <div className="desIntroOptions">
            <h4>By purchasing a {titulo}, you can customize:</h4>
            <ul>
            {list.map((list, index) => (
            <li key={index}>{list}</li>
                ))}
            </ul>
            </div>
    );
}

export default IntroOptions