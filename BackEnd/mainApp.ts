import { Application, NextFunction, Request, Response } from "express";
import { mainError } from "./Error/mainError";
import { HTTP } from "./utils/enums";
import { handleError } from "./Error/handleError";
import user from "./router/userRouter";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api", user);
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Default Api",
        });
      } catch (error) {
        return res.status(404).json({
          message: "error Loading",
        });
      }
    });
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: `Route Error`,
          message: `Route Error: Because the page, ${req.originalUrl} doesn't exit`,
          status: HTTP.Bad_Request,
          success: false,
        })
      );
    });
    app.use(handleError);
  } catch (error) {
    return error;
  }
};
