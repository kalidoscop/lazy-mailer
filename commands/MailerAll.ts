import { BaseCommand } from "@adonisjs/core/build/standalone";

export default class MailerAll extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "mailer:all";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    // this.logger.info('Hello world!')
    const { default: MailModel } = await import("App/Models/MailModel");
    const res = await MailModel.query();
    const table = this.ui.table();
    table.head(["Destinataire", "Objet", "Contenu", "Date"]);

    // Optionally define column widths
    table.columnWidths([15, 30, 10, 20]);

    // Add new rows
    for (let i = 0; i < res.length; i++) {
      const element = res[i];

      table.row([element.recipientEmail, element.object, element.content, element.createdAt.toString()]);
    }

    // Render the table
    table.render();
    // console.table(res);
  }
}
