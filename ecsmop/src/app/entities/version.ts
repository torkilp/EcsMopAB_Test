


export class Version {
    public product: string | undefined;
    public engine_group_no: string | undefined;
    public imo_no: string | undefined;
    public engine_builder: string | undefined;
    public engine_no: string | undefined;

    public controllerUnits: Array<ControllerUnit> = new Array<ControllerUnit>();
}


export class ControllerUnit {
    public id: string | undefined;
    public addr: string | undefined;
    public type: string | undefined;
    public user: string | undefined;
    public info: string | undefined;

    public parameterCheckStatus: ParameterCheckStatus = new ParameterCheckStatus();
  }

  export class ParameterCheckStatus {

    public user: string | undefined; 
    public chief: string | undefined;   
    public service: string | undefined;
    public design: string | undefined;
    public imo_design: string | undefined;    
    public imo_chief: string | undefined; 

  }