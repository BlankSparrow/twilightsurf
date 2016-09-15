class Star {
    start_pos = {x: 0,y: 0};
    start_velocity = {x: 0,y: 0};
    current_velocity = {x: 0,y: 0};
    update_velocity = {x: 0,y: 0};

    constructor(public p_x: number, public p_y: number, public v_x: number, public v_y: number, public uv_x: number, public uv_y: number) {
        this.start_pos.x = p_x;
        this.start_pos.y = p_y;
        
        this.start_velocity.x = v_x;
        this.start_velocity.y = v_y;
        this.current_velocity.x = v_x;
        this.current_velocity.y = v_y;
        this.update_velocity.x = uv_x;
        this.update_velocity.y = uv_y;
    }
    
    reset( dt: number) {
        this.current_velocity.x = this.start_velocity.x;
        this.current_velocity.y = this.start_velocity.y;
    }

    update(){
        this.current_velocity.x += this.update_velocity.x;
        this.current_velocity.y += this.update_velocity.y;
    }
};