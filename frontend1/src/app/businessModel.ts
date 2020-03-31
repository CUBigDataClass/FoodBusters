export class Business {
    id: String;
    alias: String;
    name: String;
    is_closed: Boolean;
    url: String;
    review_count: Number;
    categories: {
        alias: String;
        title: String;
    };
    rating : Number;
    coordinates: {
        latitude: Number;
        longitude:Number;
    };
    transactions: Object;
    price: String;
    location:{
        address1: String;
        address2: String;
        address3: String;
        city: String;
        zip_code: String;
        country: String;
        state: String;
        display_address: Object;
      
    };
    phone: String;
    display_phone: String;
    distance: Number;
}