// export default class OAuth extends Component {
  
//     // previous lifecycle methods
//     // previous custom methods
  
//     render() {
//       const { name, photo} = this.state.user
//       const { provider } = this.props
//       const { disabled } = this.state
      
//       return (
//         <div>
//           {name
//             ? <div className={'card'}>              
//                 <img src={photo} alt={name} />
//                 <FontAwesome
//                   name={'times-circle'}
//                   className={'close'}
//                   onClick={this.closeCard.bind(this)}
//                 />
//                 <h4>{name}</h4>
//               </div>
//             : <div className={'button-wrapper fadein-fast'}>
//                 <button 
//                   onClick={this.startAuth.bind(this)} 
//                   className={`${provider} ${disabled} button`}
//                 >
//                   <FontAwesome
//                     name={provider}
//                   />
//                 </button>
//               </div>
//           }
//         </div>
//       )
//     }
//   }