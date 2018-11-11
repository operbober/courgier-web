export const defineAction = (type: string, subactions: string[] = []) => {

    if (!Array.isArray(subactions)) {
        subactions = []
    }

    const action: any = subactions.reduce((r, i) => Object.assign({}, r, {
        [i]: `${type}_${i}`,
    }), {});

    action.ACTION = type;
    action.toString = () => type.toString();
    return action;
};

type AsyncActionKeys = 'ACTION' | 'REQUEST' | 'SUCCESS' | 'FAILURE';
export const defineAsyncAction = (type: string) : {[key in AsyncActionKeys]: string} => defineAction(type, ['REQUEST', 'SUCCESS', 'FAILURE']);
