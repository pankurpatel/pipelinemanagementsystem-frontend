import { PipeLine } from "../../../models/pipeline"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircleUser, faPencil, faSortDown, faEllipsis, faAngleDown, faGear, faPlus, faMoneyBill, faTag, faScaleBalanced, faFlagCheckered, faUser, faBuilding, faBarsStaggered, faFileLines } from '@fortawesome/free-solid-svg-icons';


type params = {
    selectedItem:PipeLine;
    setSelectedItem:any,
    onAddClick: any,
    onSaveClick:any,
    onCancelClick:any,
    canSave:boolean
}
export const StageActions = (props: params) => {
    const {selectedItem, setSelectedItem, canSave, ...others}=props;
    return (
        <>
            {/* <div>
            <h3>Add new stage</h3>
            <br/>
            <p>Pipeline stages represent the steps in your sales process</p>
            <br/>
            </div> */}
            <div className="action-toolbar pt-3 pb-3">
                <div className="container-fluid">
                    <div className="stageaction-editrow">
                        <div className="colactionbtnstage">
                            <div className="actiondealname">
                                <label htmlFor="name">Pipeline Name:</label>
                                <input type="text" className="form-control" defaultValue={selectedItem?.pipelineName} onChange={(e:any)=>props.setSelectedItem(e.target.value)}/>
                            </div>
                        </div>
                        <div className="colactionbtn">
                            <div className="dealprobainfo">
                                <div className="editstage-checkbox">
                                    <label className="checktogglebox"><input id="dealprobability" type="checkbox" /><span className="checktoggle"></span></label>
                                    <div className="fieldchecklabel">Deal probability</div>
                                </div>
                                <button className="probinfobtn"><FontAwesomeIcon icon={faCircleInfo} /></button>
                            </div>
                            <div className="colactionbtnrow">
                                <button type="button" className="btn btn-light" onClick={(e: any) => props.onCancelClick()}>Cancel</button>
                                <button type="button" className="btn btn-primary" disabled={!canSave}  onClick={(e: any) => {if(!canSave) return; props.onSaveClick()}}>Save Changes</button>
                                <button className="ellipsis-btn"><FontAwesomeIcon icon={faEllipsis} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}