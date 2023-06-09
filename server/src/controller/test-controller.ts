import {Get, Route} from "tsoa";

@Route("test")
export default class TestController {

    @Get("")
    async getTestMessage(): Promise<any> {
        return {
            message: "message"
        }

    }
}