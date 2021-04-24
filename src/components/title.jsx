import React from 'react';

class Title extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            title: '',
            new: 'Développeur React - React Native'
        }
        this.timer = null
        this.i = 0
    }

    Letter () {
        this.setState({
            title: this.state.title + this.state.new.charAt(this.i)
        })
        this.i = this.i + 1
        if (this.i > this.state.new.length) {
            clearInterval(this.timer)
            const el = document.getElementById('title')
            el.style.transition  = 'all 2s'
            el.style.color = '#04ADE2'
        }
    }

    componentDidMount () {
        this.timer = window.setInterval(
            this.Letter.bind(this), 150)
    }

    render () {
        return <h2 id="title">{ this.state.title }</h2>
    }
}

export default Title;
