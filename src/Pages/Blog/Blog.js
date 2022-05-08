import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>
                    Difference between javascript and nodejs
                </h3>
                <p>JavaScript is a programming language, runs in web browser. Node js is running platform for javascript,that is an interpreter</p>
            </div>
            <div>
                <h3>
                    When should you use nodejs and when should you use mongodb
                </h3>
                <p>node js is running environment for javascript. That means it helps to use javascript conveniently. Whereas, MONGODB is database service provider. Mongo db can be used to manage data.</p>
            </div>
            <div>
                <h3>
                    Differences between sql and nosql databases
                </h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
        </div>

    );
};

export default Blog;