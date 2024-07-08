import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            src={`${process.env.PUBLIC_URL}/posts1.jpg`} 
            alt="posts1" 
            className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                News
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Tascha</b></span>
                <span className='singlePostDate'> 1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Verify von Joelle Charbonneau

In einer Welt, in der Informationen streng kontrolliert und zensiert werden, lebt die 17-jährige Meri Beckley ein scheinbar gewöhnliches Leben. Nach dem plötzlichen Tod ihrer Mutter beginnt Meri jedoch, die offiziellen Erklärungen zu hinterfragen. Sie stößt auf eine geheime Widerstandsbewegung, die sich der Wahrheitsfindung verschrieben hat. Diese Gruppe kämpft gegen die Unterdrückung und Manipulation von Informationen durch die Regierung.

Meri wird in eine gefährliche Mission hineingezogen, um die Wahrheit über die Gesellschaft und ihre eigene Vergangenheit aufzudecken. Während sie tiefer in das Netz aus Lügen und Intrigen eindringt, muss sie lernen, wem sie vertrauen kann und welche Risiken sie bereit ist einzugehen, um die Wahrheit ans Licht zu bringen.

“Verify” ist ein spannender dystopischer Thriller, der Themen wie Zensur, Kontrolle und die Macht der Wahrheit behandelt. Joelle Charbonneau wirft in diesem Buch wichtige Fragen über die Bedeutung von Freiheit und die Rolle von Informationen in unserer Gesellschaft auf.

Dieses Buch richtet sich an Leser, die spannende und nachdenkliche Geschichten über Widerstand und die Suche nach Wahrheit in einer kontrollierten Welt schätzen.</p>
        </div>
      
    </div>
  )
}
