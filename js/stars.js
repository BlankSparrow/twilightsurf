var Star = (function () {
    function Star(p_x, p_y, v_x, v_y, uv_x, uv_y) {
        this.p_x = p_x;
        this.p_y = p_y;
        this.v_x = v_x;
        this.v_y = v_y;
        this.uv_x = uv_x;
        this.uv_y = uv_y;
        this.start_pos = { x: 0, y: 0 };
        this.start_velocity = { x: 0, y: 0 };
        this.current_velocity = { x: 0, y: 0 };
        this.update_velocity = { x: 0, y: 0 };
        this.start_pos.x = p_x;
        this.start_pos.y = p_y;
        this.start_velocity.x = v_x;
        this.start_velocity.y = v_y;
        this.current_velocity.x = v_x;
        this.current_velocity.y = v_y;
        this.update_velocity.x = uv_x;
        this.update_velocity.y = uv_y;
    }
    Star.prototype.reset = function (dt) {
        this.current_velocity.x = this.start_velocity.x;
        this.current_velocity.y = this.start_velocity.y;
    };
    Star.prototype.update = function () {
        this.current_velocity.x += this.update_velocity.x;
        this.current_velocity.y += this.update_velocity.y;
    };
    return Star;
}());
;