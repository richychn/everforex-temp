import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import {Link} from 'react-router-dom';

import Nav from '../components/Nav';
import '../css/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef = React.createRef();
        this.featuresRef = React.createRef(); 
        this.el = null;
    }

    componentDidMount() {
        if (this.el) {
          typeformEmbed.makeWidget(this.el, "https://sample.typeform.com/to/LSMfI2Tw", {
            hideFooter: true,
            hideHeaders: true,
            opacity: 0
          });
        }
      }

    scrollContact = () => this.contactRef.current.scrollIntoView()
    scrollFeatures = () => this.featuresRef.current.scrollIntoView()

    renderHero() {
        return (
            <div className='hero'>
                <div className='ui container'>
                    <div className='hero-left'>
                        <h1>Trade forex without fear. Join our experienced community.</h1>
                        <p>We provide the latest trading technology, MetaTrader 5, on both mobile and desktop to help you trade efficiently and cheaply. Additionally, our Chinese and English communities of experienced and beginner traders will keep you company.</p>
                        <div>
                            <p onClick={this.scrollContact} className='solid button'>Sign Up</p>
                            <p onClick={this.scrollFeatures} className='outline button'>Learn More</p>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <img src="hero.png" alt="MT5 Demo"/>
                    </div>
                </div>
            </div>
        )
    }

    renderFeatures() {
        return (
            <div className='features' ref={this.featuresRef}>
                <div className='section'>
                    <div className='ui container'>
                        <div className='left'>
                            <img src='./mt5 logo.png' alt="MT5 logo" />
                        </div>
                        <div className='right'>
                            <h2>Use The Latest Technology</h2>
                            <p>The maker of MT4, MetaQuotes, brought us the latest advancement in trading technology with MetaTrader 5 (MT5). With it, you can:</p>
                            <ul>
                                <li>Copy trade: subscribe to a successful trader, and MT5 will automatically copy his/her trades</li>
                                <li>Trade from anywhere: download MT5 desktop and mobile, and you won't worry about being unable to trade</li>
                                <li>Analyze with help: use built-in or community made tools and indicators to find the best trades</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='ui container'>
                        <div className='left'>
                            <h2>Find The Best Prices</h2>
                            <p>With ECN trading, we gather the prices from multiple banks and liquidity sources and pick the best ones for you. We provide the ideal bid price and ask price even if they are from different sources. That's how we keep our spreads low and your trades cheap.</p>
                        </div>
                        <div className='right'>
                            <img src='./network.png' alt="Interconnected" />
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='ui container'>
                        <div className='left'>
                            <img src='./community.png' alt="Community" />
                        </div>
                        <div className='right'>
                            <h2>Join a Community of Traders</h2>
                            <p>From beginners to experts, from English speakers to Chinese, we have built a global community for you to get your next trade idea or just to start learning how to trade. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderContact() {
        return (
            <div className='contact' ref={this.contactRef}>
                <div ref={(el) => this.el = el} style={{width: '100%', height: '100%'}} />
            </div>
        )
    }

    renderFooter() {
        return (
            <div className='footer'>
                <div className='ui container'>
                    <div className='top'>
                        <p>Everforex Financial Pty Ltd is a regulated entity under Australian law (ACN: 115 459 124, AFSL No. 297499). This website is not directed at any jurisdiction that would be contrary to local law or regulation, including but not limited to the United States, Japan, and Europe. Forex trading involves significant risk of loss and is not suitable for all investors.</p>
                    </div>
                    <div className='bottom'>
                        <p>&#169; 2021 Everforex Financial Pty Ltd</p>
                        <div>
                            <Link to='/careers'>Careers</Link>
                            <Link to='/legal'>Legal Documents</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTesting() {
        return (
            <div className='testing'>
                <h2>Testing</h2>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Nav contactRef={this.contactRef} />
                {this.renderHero()}
                {this.renderFeatures()}
                {this.renderContact()}
                {this.renderFooter()}
                {this.renderTesting()}
            </div>
        )
    }
}

export default Home;