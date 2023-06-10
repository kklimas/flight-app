import {Get, Route} from "tsoa";

@Route("/test")
export default class TestController {
    @Get("/")
    public async getMessage(): Promise<any> {
        return {
            message: 'Hello'
        }
    }
}