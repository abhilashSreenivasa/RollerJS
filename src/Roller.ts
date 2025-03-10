export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    // specifies the number of faces the die has. It must have at least 2 faces
    // so any invalid values should default to 6 to represent the common 
    // six-sided die.
    constructor(faces: number) {
        this._distribution=new Map();
        this._last=0;
        if(!faces || faces<2)
            this._faces=6;
        else
            this._faces=faces;
    }

    // specifies which number should be rolled and returns the recorded roll. 
    // If the value provided is not valid for the number of faces the die has,
    // no record of the roll should be made and 0 should be returned. However,
    // if the value provided is between 1 and the number of faces (inclusive),
    // then:
    //   1. that same value should be returned,
    //   2. that value should be stored as the last roll, and
    //   3. the distribution should update the distribution record so that the
    //      key (value rolled) has an updated value that increases the number
    //      of rolls for that face by 1
    roll(value: number): number{
        if(value<1 || value> this._faces)
            return 0;
        let key=value;
        let val=this._distribution.get(key);
        if(!val || val==undefined)
            this._distribution.set(key,1);
        else    
            this._distribution.set(key,val);
        this._last=value;
        return value;
    }

    // returns the value of the latest die roll. If no rolls have been made
    // yet, then it should return 0.
    last(): number {
        return this._last;
    }
    getFaces():number{
        return this._faces;
    }

    // returns a Map that represents the current distribution of rolls for each
    // possible face that can be rolled. The map's key should be the face
    // value and its value should be the number of times that face has been
    // rolled. Even if a face has not yet been rolled, its key should have a
    // value of 0.
    distribution(): Map<number, number>{
        return this._distribution;
    }
} // end of Roller class