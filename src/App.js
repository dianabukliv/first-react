import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import './index.css';
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';



class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'ДОРТМУНД',
          img:'tov1.jpg',
          desc: '«Дортмунд» — це той виріб, до якого хочеться повертатись після роботи, роздивлятись, милуватись і кожен раз бачити в ньому щось нове та унікальне.',
          category: 'Світлі дивани',
          price: '33282 грн'
        },
        {
          id: 2,
          title: 'СІДНЕЙ',
          img:'tov2.jpg',
          desc: "Розкішний стиль моделі «Сідней» уособлює розкіш та забезпечує максимальний комфорт!  Відпочинковий диван представлений 18 модулями.",
          category: 'Прямі дивани',
          price: '27744 грн'
        },
        {
          id: 3,
          title: 'ОКСФОРД',
          img:'tov3.jpg',
          desc: "«Краса — в шляхетності простоти». Витончений диван «Оксфорд» прикрасить інтер'єр як у приватному будинку, так і в офісі.  ",
          category: 'Сині дивани',
          price: '43666 грн'
        },
        {
          id: 4,
          title: 'ДОРТМУНД',
          img:'tov10.jpg',
          desc: '«Дортмунд» — це той виріб, до якого хочеться повертатись після роботи, роздивлятись, милуватись і кожен раз бачити в ньому щось нове та унікальне.',
          category: 'Світлі дивани',
          price: '90876 грн'
        },
        {
          id: 5,
          title: 'СІДНЕЙ',
          img:'tov4.jpg',
          desc: "Розкішний стиль моделі «Сідней» уособлює розкіш та забезпечує максимальний комфорт!  Відпочинковий диван представлений 18 модулями.",
          category: 'Світлі дивани',
          price: '21365 грн'
        },
        {
          id: 6,
          title: 'ОКСФОРД',
          img:'tov6.jpg',
          desc: "«Краса — в шляхетності простоти». Витончений диван «Оксфорд» прикрасить інтер'єр як у приватному будинку, так і в офісі.  ",
          category: 'Світлі дивани',
          price: '12545 грн'
        },
        {
          id: 7,
          title: 'ДОРТМУНД',
          img:'tov5.jpg',
          desc: '«Дортмунд» — це той виріб, до якого хочеться повертатись після роботи, роздивлятись, милуватись і кожен раз бачити в ньому щось нове та унікальне.',
          category: 'Світлі дивани',
          price: '23456 грн'
        },
        {
          id: 8,
          title: 'СІДНЕЙ',
          img:'tov7.jpg',
          desc: "Розкішний стиль моделі «Сідней» уособлює розкіш та забезпечує максимальний комфорт!  Відпочинковий диван представлений 18 модулями.",
          category: 'Зелені дивани',
          price: '33282 грн'
        },
        {
          id: 9,
          title: 'ОКСФОРД',
          img:'tov8.jpg',
          desc: "«Краса — в шляхетності простоти». Витончений диван «Оксфорд» прикрасить інтер'єр як у приватному будинку, так і в офісі.  ",
          category: 'Зелені дивани',
          price: '40987 грн'
        },
        {
          id: 10,
          title: 'ДОРТМУНД',
          img:'tov9.jpg',
          desc: '«Дортмунд» — це той виріб, до якого хочеться повертатись після роботи, роздивлятись, милуватись і кожен раз бачити в ньому щось нове та унікальне.',
          category: 'Стілець',
          price: '33282 грн'
        },
        {
          id: 11,
          title: 'СІДНЕЙ',
          img:'tov11.jpg',
          desc: "Розкішний стиль моделі «Сідней» уособлює розкіш та забезпечує максимальний комфорт!  Відпочинковий диван представлений 18 модулями.",
          category: 'Сині дивани',
          price: '20182 грн'
        },
        {
          id: 12,
          title: 'ОКСФОРД',
          img:'tov12.jpg',
          desc: '«Дортмунд» — це той виріб, до якого хочеться повертатись після роботи, роздивлятись, милуватись і кожен раз бачити в ньому щось нове та унікальне.',
          category: 'Світлі дивани',
          price: '38200 грн'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<>
              <Header orders={this.state.orders} onDelete={this.deleteOrder} />
              <div className='presentation'></div>
              <Categories chooseCategory={this.chooseCategory}/>
              <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
              {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} /> }
            </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
      
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) { 
    const isInArray = this.state.orders.some((el) => el.id === item.id);
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
