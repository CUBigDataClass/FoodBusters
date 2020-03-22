export class Business {
    is_claimed : Boolean;
    rating : Number;
    rating_img_url: String;
    review_count: Number;
    name: String;
    rating_img_url_small: String;
    url: String;
    categories: {
        alias: String;
        title: String;
    };
    phone: String;
    price: String;
    image_url: String;
    snippet_image_url: String;
    display_phone: String;
    rating_img_url_large: String;
    id: String;
    is_closed: Boolean;
    location:{
        address1: String;
        address2: String;
        address3: String;
        city: String;
        country: String;
        display_address: Object;
        state: String;
        zip_code:String;
    };
    transactions: Object;
    distance: Number;
    coordinates: {
        latitude: Number;
        longitude:Number;
    };
    
    title: String;
}