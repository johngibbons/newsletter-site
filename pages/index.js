import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import '../css/index.css'

export default class Index extends React.Component {
  render () {
    return (
      <div className='main-container-hero'>
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              'name': 'description',
              'content': 'A newsletter featuring one beautiful booty per day'
            },
            {
              'name': 'keywords',
              'content': 'booty, newsletter, men, women, sexy, butt, ass'
            }
          ]}
        />
        <div className='main-container'>
          <h1 className='main-container-page-title'>booty<span className='peach'>🍑</span>break</h1>
          <h3 className='main-container-sub-title'>Feeling tired from a long day?
            Skip the coffee, let us perk you up with a badonk in the afternoon</h3>
          <div className='main-container-signup-form'>
            <form
              action='//johnmgibbons.us5.list-manage.com/subscribe/post?u=d911405bc929372e6d7cf0b8c&amp;id=4804a48fc5'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate'
              target='_blank'
              noValidate
              >
              <div id='mc_embed_signup_scroll'>
                <div className='main-container-signup-container'>
                  <input
                    type='email'
                    placeholder='Enter email address'
                    name='EMAIL'
                    className='main-container-signup'
                    id='mce-EMAIL'
                    />
                </div>
                <input
                  type='submit'
                  value='Sign me up!'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='main-container-submit'
                  />
              </div>
              <div id='mce-responses' className='clear'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{display: 'none'}}
                />
                <div
                  className='response'
                  id='mce-success-response'
                  style={{display: 'none'}}
                />
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
                >
                <input
                  type='text'
                  name='b_d911405bc929372e6d7cf0b8c_4804a48fc5'
                  tabIndex='-1'
                  value=''
                />
              </div>
            </form>
          </div>
        </div>
        <div className='main-container-hero-overlay' />
      </div>
    )
  }
}
