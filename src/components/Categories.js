import React, { Component } from 'react'
import '../style/categories.css'

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Всі"
                },
                {
                    
                    key: "Світлі дивани",
                    name: "Світлі дивани"
                },
                {
                    key: "Прямі дивани",
                    name: "Прямі дивани"
                },
                {
                    key: "Сині дивани",
                    name: "Сині дивани"
                },
                {
                    key: "Зелені дивани",
                    name: "Зелені дивани"
                },
                {
                    key: "Стілець",
                    name: "Стілець"
                }

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
