import react from 'react';

class footer extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerList: [
        {
          name: "游戏",
          src: 'data:image/png;base64,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'
        },{
          name: "礼包",
          src: 'data:image/png;base64,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'
        },{
          name: "社区",
          src: 'data:image/png;base64,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'
        },{
          name: "个人",
          src: 'data:image/png;base64,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'
        }
      ]
    }
  }

  load() {
    return this.state.footerList.map(function(item,i){
      return <li key={i}>
                <link>
                  <img src={item.src}/>
                  <span>{item.name}</span>
                </link>
              </li>
    })
  }

  render() {
    return (
      <section className="container">
        <section className="content">
          {this.props.children}
        </section>
        <footer className="footer">
          <nav>
              {this.load}
          </nav>
        </footer>
      </section>
    )
  }

}

export { footer as default };
