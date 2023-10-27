/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface InterfaceComponent {
  title: string;
}

class Component<T extends InterfaceComponent> {
  constructor (public props:T) {

  }
}

class Page extends Component<InterfaceComponent> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};