export class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connected: boolean = false;

  private constructor(){};

  public static getInstance(): DatabaseConnection {
    if (this.instance === null) {
      this.instance = new DatabaseConnection();
    }
    return this.instance;
  }

  public connect(): void {
    console.log("Conectando a la base de datos...");
    this.connected = true;
    // Aquí se añadiría la lógica para conectar a la base de datos
  }

  public disconnect(): void {
    console.log("Desconectando de la base de datos...");
    this.connected = false;
    // Aquí se añadiría la lógica para desconectar de la base de datos
  }
  public isConnected(): boolean {
    console.log("Verificando conexión a la base de datos...");
    // Aquí se añadiría la lógica para verificar si la conexión a la base de datos está activa
    return this.connected;
  }
}
