import React from 'react';

class Title extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            title: 'Je suis',
            new: ' Développeur Intégrateur Web.'
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
        }   
    }

    componentDidMount () {
        this.timer = window.setInterval(
            this.Letter.bind(this), 200)
    }

    render () {
        return <h2>{ this.state.title }</h2>
    }
}

export default Title;